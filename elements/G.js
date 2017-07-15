import React from 'react';
import createReactNativeComponentClass from 'react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass';
import Shape from './Shape';
import {pathProps, fontProps} from '../lib/props';
import {GroupAttributes} from '../lib/attributes';
import extractProps from '../lib/extract/extractProps';
import {extractFont} from '../lib/extract/extractText';

export default class extends Shape{
    static displayName = 'G';

    static propTypes = {
        ...pathProps,
        ...fontProps,
    };

    setNativeProps = (...args) => {
        this.root.setNativeProps(...args);
    };

    render() {
        let {props} = this;

        return <RNSVGGroup
            {...extractProps(props, this)}
            font={extractFont(props)}
            ref={ele => {this.root = ele;}}
        >
            {props.children}
        </RNSVGGroup>;
    }
}

const RNSVGGroup = createReactNativeComponentClass({
    validAttributes: GroupAttributes,
    uiViewClassName: 'RNSVGGroup'
});
