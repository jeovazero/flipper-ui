import Downshift from 'downshift'
import {
    contains,
    filter,
    is,
    isNil,
    pipe,
    propEq,
    propOr,
    toLower,
    uniq,
    unless,
    when
} from 'ramda'
import React, {
    cloneElement,
    Component,
    Fragment,
    ReactElement,
    ReactNode
} from 'react'
import Paper from './Paper'

interface IProps {
    data: object[] | string[]
    value: string
    defaultValue?: string
    inputElement: ReactElement<any>
    InputProps?: object
    renderSuggestion: (
        suggestion: string | object,
        itemProps: object,
        selected: boolean
    ) => ReactNode
    onChange?: (value: string) => void
    onSelect?: (value: string) => void
}

class AutoComplete extends Component<IProps> {
    public autocomplete = { offsetWidth: 256 }
    public getSuggestions(inputValue) {
        const items = inputValue
            ? this.props.data
            : []

        return uniq(
            filter(
                unless(
                    propEq('subheader', true),
                    pipe(
                        when(is(Object), propOr('', 'label')),
                        toLower,
                        contains(toLower(inputValue))
                    )
                ),
                items
            )
        )
    }

    public handleSelect(value) {
        if (this.props.onSelect) {
            this.props.onSelect(value)
        } else {
            this.handleChange(value)
        }
    }

    public handleChange(value) {
        if (!isNil(value) && this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public renderInput(props: { inputProps: object }) {
        return cloneElement(this.props.inputElement, {
            InputProps: {
                ...props,
                ...this.props.InputProps
            },
            inputProps: {
                ref: self => {
                    this.autocomplete = self
                }
            }
        })
    }

    public render() {
        const paperStyle = {
            position: 'absolute',
            width: this.autocomplete.offsetWidth,
            zIndex: 1099
        }

        return (
            <Downshift
                defaultIsOpen={ false }
                inputValue={ this.props.value }
                defaultInputValue={ this.props.defaultValue }
                itemToString={ item => is(Object, item) ? item.label : item }
                onSelect={ this.handleSelect.bind(this) }
                onInputValueChange={ this.props.onChange }>
                {
                    ({ isOpen, getInputProps, inputValue, getItemProps, highlightedIndex }) =>
                        <div>
                            { this.renderInput(getInputProps()) }
                            {
                                isOpen && (
                                    <Paper square style={ paperStyle }>
                                        {
                                            this.getSuggestions(inputValue).map((suggestion, index) =>
                                                <Fragment key={ index }>
                                                    {
                                                        this.props.renderSuggestion(
                                                            suggestion,
                                                            getItemProps({ item: suggestion }),
                                                            highlightedIndex === index
                                                        )
                                                    }
                                                </Fragment>
                                            )
                                        }
                                    </Paper>
                                )
                            }
                        </div>
                }
            </Downshift>
        )
    }
}

export default AutoComplete