import PropTypes from 'prop-types'
import { Path, Svg } from "@react-pdf/renderer";


function Icon({format, path, width, height, fill, fillRule}) {
    let SVG = 'svg';
    let PATH = 'path';

    if (format == "PDF") {
        SVG = Svg;
        PATH = Path;
    }

    return(
        <SVG height={height} viewBox="0 -960 960 960" width={width}>
            <PATH d={path} fill={fill} fillRule={fillRule ? fillRule : null} />
        </SVG>
    );
}

Icon.propTypes = {
    format: PropTypes.string,
    path: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    fillRule: PropTypes.string
};

Icon.defaultProps = {
    width: "24",
    height: "24",
    fill: "black"
}


export function LocationIcon({format, width, height}) {
    let path = "M480.068-485.385q29.855 0 51.047-21.26 21.192-21.26 21.192-51.115t-21.26-51.047q-21.26-21.192-51.115-21.192t-51.047 21.26q-21.192 21.26-21.192 51.115t21.26 51.047q21.26 21.192 51.115 21.192ZM480-179.461q117.384-105.076 179.654-201.577 62.269-96.5 62.269-169.039 0-109.384-69.5-179.846T480-800.385q-102.923 0-172.423 70.462t-69.5 179.846q0 72.539 62.269 169.039Q362.616-284.537 480-179.461Zm0 79.844Q329.001-230.463 253.539-343.154q-75.461-112.692-75.461-206.923 0-138.46 89.577-224.191Q357.231-859.999 480-859.999t212.345 85.731q89.577 85.731 89.577 224.191 0 94.231-75.461 206.923Q630.999-230.463 480-99.617Zm0-458.075Z";

    return(
        <Icon format={format} path={path} width={width} height={height} />
    );
}

LocationIcon.propTypes = {
    format: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export function MailIcon({format, width, height}) {
    let path = "M172.309-180.001q-30.308 0-51.308-21t-21-51.308v-455.382q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H172.309ZM480-457.694 160-662.309v410q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h615.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-410L480-457.694ZM480-520l313.846-200H166.154L480-520ZM160-662.309V-720-252.309q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462H160v-422.309Z";

    return(
        <Icon format={format} path={path} width={width} height={height} />
    );
}

MailIcon.propTypes = {
    format: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export function PhoneIcon({format, width, height}) {
    let path = "M777.614-140.001q-113.076 0-227.191-52.577-114.115-52.577-209.691-148.346-95.577-95.769-148.154-209.691-52.577-113.923-52.577-226.999 0-18.165 12-30.275t30-12.11h130.46q15.154 0 26.731 9.885 11.577 9.885 14.73 24.423L376.845-668q2.385 16.385-1 28.154-3.384 11.769-12.154 19.769l-92.384 89.923q22.308 40.846 50.962 77.269 28.654 36.424 62.038 69.578 32.924 32.923 70.001 61.154 37.077 28.231 80.077 52.538l89.769-90.538q9.385-9.769 22.731-13.692 13.346-3.923 27.731-1.923l111.075 22.615q15.154 4 24.731 15.461 9.577 11.462 9.577 26.001v129.69q0 18-12.11 30t-30.275 12ZM242.923-586.922l71.385-68.308q1.923-1.539 2.5-4.231.577-2.693-.192-5l-17.385-89.385q-.769-3.077-2.692-4.615-1.923-1.539-5-1.539H206q-2.307 0-3.846 1.539-1.539 1.538-1.539 3.846 3.077 41 13.423 83.308 10.347 42.308 28.885 84.385Zm347.999 345.691q39.77 18.539 82.962 28.347 43.193 9.807 80.731 11.653 2.308 0 3.846-1.538 1.539-1.539 1.539-3.847v-84.153q0-3.077-1.539-5.001-1.538-1.923-4.615-2.692l-84-17.077q-2.307-.769-4.038-.192-1.731.577-3.654 2.5l-71.232 72ZM242.923-586.922Zm347.999 345.691Z";

    return(
        <Icon format={format} path={path} width={width} height={height} />
    );
}

PhoneIcon.propTypes = {
    format: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export function LinkIcon({format, width, height}) {
    let path = "M432.307-298.463H281.539q-75.338 0-128.438-53.093-53.1-53.093-53.1-128.422t53.1-128.444q53.1-53.115 128.438-53.115h150.768v59.998H281.539q-50.385 0-85.962 35.577Q160-530.385 160-480q0 50.385 35.577 85.962 35.577 35.577 85.962 35.577h150.768v59.998ZM330.001-450.001v-59.998h299.998v59.998H330.001Zm197.692 151.538v-59.998h150.768q50.385 0 85.962-35.577Q800-429.615 800-480q0-50.385-35.577-85.962-35.577-35.577-85.962-35.577H527.693v-59.998h150.768q75.338 0 128.438 53.093 53.1 53.093 53.1 128.422t-53.1 128.444q-53.1 53.115-128.438 53.115H527.693Z";

    return(
        <Icon format={format} path={path} width={width} height={height} />
    );
}

LinkIcon.propTypes = {
    format: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};