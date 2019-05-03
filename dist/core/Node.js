"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../colors");
const icons_1 = require("../icons");
const styles = {
    icon: {
        fontSize: '24px',
        marginRight: '12px'
    }
};
const Ul = styled_components_1.default.ul `
    width: 350px;
`;
const Li = styled_components_1.default.li `
    font-size: 16px;
    margin: 12px;
    background: ${colors_1.transparent};
    padding: 12px;
    padding-left: ${props => props.inset ? '12px' : '48px'};
    list-style: none;
    border-radius: 6px;
    border: 1px solid ${colors_1.background.dark};
    transition: all 500ms ease;
    cursor: pointer;
    align-items: center;
    display: flex;
    &:hover {
        background: ${colors_1.background.light};
        border: 1px solid ${colors_1.primary.normal};
    }
`;
class Node extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleToggleOpen() {
        this.setState(ramda_1.evolve({ open: ramda_1.not }));
    }
    renderDropdownIcon() {
        return this.state.open
            ? react_1.default.createElement(icons_1.KeyboardArrowUp, { style: styles.icon })
            : react_1.default.createElement(icons_1.KeyboardArrowDown, { style: styles.icon });
    }
    render() {
        const { open } = this.state;
        const { id, name, children, style = {}, className } = this.props;
        return (react_1.default.createElement(Ul, { key: id || name, style: style, className: className },
            react_1.default.createElement(Li, { inset: Boolean(children), onClick: this.handleToggleOpen.bind(this) },
                children && this.renderDropdownIcon(),
                name),
            open && children));
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map