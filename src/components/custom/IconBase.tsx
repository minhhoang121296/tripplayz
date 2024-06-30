import IcomoonReact from "icomoon-react";
import PropTypes from "prop-types";
import { Colors } from "@/assets/colors";
import iconSet from "@/assets/icons/selection.json";

const IconBase = (props: any) => {
    const { color, size, icon, className } = props;
    return (
        <IcomoonReact
            className={"flex-none " + className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
};

IconBase.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string, // currentColor cấn set trong trường hợp muốn hover đổi màu icon
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconBase.defaultProps = {
    className: "",
    color: Colors.black,
    size: 24
};

export { IconBase };

