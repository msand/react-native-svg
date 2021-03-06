import { idPattern } from '../util';

const clipRules = {
  evenodd: 0,
  nonzero: 1,
};

export default function extractClipPath(props) {
  const { clipPath, clipRule } = props;
  const clipPathProps = {};

  if (clipRule) {
    clipPathProps.clipRule = clipRules[clipRule] === 0 ? 0 : 1;
  }

  if (clipPath) {
    const matched = clipPath.match(idPattern);

    if (matched) {
      clipPathProps.clipPath = matched[1];
    } else {
      console.warn(
        'Invalid `clipPath` prop, expected a clipPath like "#id", but got: "' +
          clipPath +
          '"',
      );
    }
  }

  return clipPathProps;
}
