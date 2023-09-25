import _styled from "@emotion/styled/base";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { FlexBox, Text } from '@codecademy/gamut';
import { DotLoose } from '@codecademy/gamut-patterns';
import { pxRem, styledOptions, variant } from '@codecademy/gamut-styles';
import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var EmptyContainer = /*#__PURE__*/_styled(FlexBox, {
  target: "etfbdk12",
  label: "EmptyContainer"
})(variant({
  prop: 'stretchDirection',
  defaultVariant: 'left',
  base: {
    justifySelf: 'center',
    position: 'relative',
    px: 32,
    py: {
      _: 64,
      lg: 96
    },
    width: 1
  },
  variants: {
    left: {
      pl: {
        sm: 0
      },
      pr: {
        sm: 64,
        lg: 96
      }
    },
    right: {
      pr: {
        sm: 0
      },
      pl: {
        sm: 64,
        lg: 96
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbXB0eVNlY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDdUIiLCJmaWxlIjoiLi4vLi4vc3JjL0VtcHR5U2VjdGlvbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcywgRmxleEJveCwgVGV4dCB9IGZyb20gJ0Bjb2RlY2FkZW15L2dhbXV0JztcbmltcG9ydCB7IElsbHVzdHJhdGlvblByb3BzIH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQtaWxsdXN0cmF0aW9ucyc7XG5pbXBvcnQgeyBEb3RMb29zZSB9IGZyb20gJ0Bjb2RlY2FkZW15L2dhbXV0LXBhdHRlcm5zJztcbmltcG9ydCB7IHB4UmVtLCBzdHlsZWRPcHRpb25zLCB2YXJpYW50IH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQtc3R5bGVzJztcbmltcG9ydCB7IFN0eWxlUHJvcHMgfSBmcm9tICdAY29kZWNhZGVteS92YXJpYW5jZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERyb3Bkb3duQnV0dG9uUHJvcHMgfSBmcm9tICcuLic7XG5cbmV4cG9ydCB0eXBlIEVtcHR5U2VjdGlvblByb3BzID0ge1xuICAvKipcbiAgICogUGFyYWdyYXBoIHRleHQgdGhhdCBkaXNwbGF5cyBiZW5lYXRoIHRoZSBoZWFkaW5nIHRleHRcbiAgICovXG4gIGJvZHlUZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCdXR0b24gb3IgZHJvcGRvd24gYnV0dG9uIHdpdGggYW4gYWN0aW9uIGZvciB0aGUgdXNlciB0byB0YWtlXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50PEJ1dHRvblByb3BzIHwgRHJvcGRvd25CdXR0b25Qcm9wcz47XG4gIC8qKlxuICAgKiBUaGUgbGFyZ2VyIGhlYWRpbmcgdGV4dCB0aGF0IGFwcGVhcnMgb3ZlciB0aGUgYm9keSB0ZXh0XG4gICAqL1xuICBoZWFkaW5nVGV4dDogc3RyaW5nO1xuICBpbGx1c3RyYXRpb246IFJlYWN0LkNvbXBvbmVudFR5cGU8SWxsdXN0cmF0aW9uUHJvcHM+O1xuICAvKipcbiAgICogV2hldGhlciB0aGUgaWxsdXN0cmF0aW9uIGFwcGVhcnMgdG8gdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhlIHJlc3Qgb2YgdGhlIHNlY3Rpb24ncyBjb250ZW50XG4gICAqL1xuICBpbGx1c3RyYXRpb25Qb3NpdGlvbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwYXR0ZXJuIGJhY2tncm91bmQgc3RyZXRjaGVzIHRvIHRoZSBlbmQgb2YgdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhlIHZpZXdwb3J0XG4gICAqL1xuICBzdHJldGNoRGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xufTtcblxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQoRmxleEJveCkoXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6ICdzdHJldGNoRGlyZWN0aW9uJyxcbiAgICBkZWZhdWx0VmFyaWFudDogJ2xlZnQnLFxuICAgIGJhc2U6IHtcbiAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcHg6IDMyLFxuICAgICAgcHk6IHsgXzogNjQsIGxnOiA5NiB9LFxuICAgICAgd2lkdGg6IDEsXG4gICAgfSxcbiAgICB2YXJpYW50czoge1xuICAgICAgbGVmdDoge1xuICAgICAgICBwbDogeyBzbTogMCB9LFxuICAgICAgICBwcjogeyBzbTogNjQsIGxnOiA5NiB9LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHByOiB7IHNtOiAwIH0sXG4gICAgICAgIHBsOiB7IHNtOiA2NCwgbGc6IDk2IH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBEb3RzID0gc3R5bGVkKERvdExvb3NlKShcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3N0cmV0Y2hEaXJlY3Rpb24nLFxuICAgIGRlZmF1bHRWYXJpYW50OiAnbGVmdCcsXG4gICAgYmFzZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAnLTZyZW0nLFxuICAgICAgcmlnaHQ6ICctNnJlbScsXG4gICAgfSxcbiAgICB2YXJpYW50czoge1xuICAgICAgbGVmdDoge1xuICAgICAgICByaWdodDogeyBzbTogMCB9LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIGxlZnQ6IHsgc206IDAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHMgPSB2YXJpYW50KHtcbiAgcHJvcDogJ2lsbHVzdHJhdGlvblBvc2l0aW9uJyxcbiAgZGVmYXVsdFZhcmlhbnQ6ICdyaWdodCcsXG4gIGJhc2U6IHtcbiAgICBteDogeyBfOiAnYXV0bycsIHNtOiAwIH0sXG4gICAgbWI6IHsgXzogMzIsIHNtOiAwIH0sXG4gIH0sXG4gIHZhcmlhbnRzOiB7XG4gICAgbGVmdDoge1xuICAgICAgbXI6IHsgc206IDQ4IH0sXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgbWw6IHsgc206IDQ4IH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG50eXBlIElsbHVzdHJhdGlvbkNvbnRhaW5lclByb3BzID0gU3R5bGVQcm9wczxcbiAgdHlwZW9mIGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHNcbj47XG5cbmNvbnN0IElsbHVzdHJhdGlvbkNvbnRhaW5lciA9IHN0eWxlZChcbiAgJ2RpdicsXG4gIHN0eWxlZE9wdGlvbnNcbik8SWxsdXN0cmF0aW9uQ29udGFpbmVyUHJvcHM+KGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHMpO1xuXG5leHBvcnQgY29uc3QgRW1wdHlTZWN0aW9uOiBSZWFjdC5GQzxFbXB0eVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBib2R5VGV4dCxcbiAgY2hpbGRyZW4sXG4gIGhlYWRpbmdUZXh0LFxuICBpbGx1c3RyYXRpb246IElsbHVzdHJhdGlvbixcbiAgc3RyZXRjaERpcmVjdGlvbixcbiAgaWxsdXN0cmF0aW9uUG9zaXRpb24gPSBzdHJldGNoRGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0Jyxcbn0pID0+IHtcbiAgY29uc3QgZmxleERpcmVjdGlvbiA9XG4gICAgaWxsdXN0cmF0aW9uUG9zaXRpb24gPT09ICdyaWdodCcgPyAncm93LXJldmVyc2UnIDogJ3Jvdyc7XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlDb250YWluZXIgc3RyZXRjaERpcmVjdGlvbj17c3RyZXRjaERpcmVjdGlvbn0+XG4gICAgICA8RG90cyBzdHJldGNoRGlyZWN0aW9uPXtzdHJldGNoRGlyZWN0aW9ufSAvPlxuICAgICAgPEZsZXhCb3hcbiAgICAgICAgbWF4V2lkdGg9XCI4MjJweFwiXG4gICAgICAgIGZsZXhCYXNpcz1cIjEwMCVcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgYmc9XCJiYWNrZ3JvdW5kLWN1cnJlbnRcIlxuICAgICAgICBweT17NDh9XG4gICAgICAgIHB4PXt7IF86IDE2LCBzbTogNDgsIG1kOiA2NCB9fVxuICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgIGZsZXhEaXJlY3Rpb249e3sgXzogJ2NvbHVtbicsIHNtOiBmbGV4RGlyZWN0aW9uIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PXt7IF86ICdzcGFjZS1hcm91bmQnLCBtZDogJ3NwYWNlLWJldHdlZW4nIH19XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICB0ZXh0QWxpZ249e3sgXzogJ2NlbnRlcicsIHNtOiAnc3RhcnQnIH19XG4gICAgICA+XG4gICAgICAgIDxJbGx1c3RyYXRpb25Db250YWluZXIgaWxsdXN0cmF0aW9uUG9zaXRpb249e2lsbHVzdHJhdGlvblBvc2l0aW9ufT5cbiAgICAgICAgICA8SWxsdXN0cmF0aW9uIHdpZHRoPXtweFJlbSgxMDApfSAvPlxuICAgICAgICA8L0lsbHVzdHJhdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPEZsZXhCb3hcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPXt7IF86ICdjZW50ZXInLCBzbTogJ3N0YXJ0JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgYXM9XCJoMlwiIGZvbnRTaXplPXsyMn0gbWI9ezh9PlxuICAgICAgICAgICAge2hlYWRpbmdUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBtYj17MzJ9Pntib2R5VGV4dH08L1RleHQ+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICA8L0ZsZXhCb3g+XG4gICAgPC9FbXB0eUNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0= */");
var Dots = /*#__PURE__*/_styled(DotLoose, {
  target: "etfbdk11",
  label: "Dots"
})(variant({
  prop: 'stretchDirection',
  defaultVariant: 'left',
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-6rem',
    right: '-6rem'
  },
  variants: {
    left: {
      right: {
        sm: 0
      }
    },
    right: {
      left: {
        sm: 0
      }
    }
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbXB0eVNlY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEYSIsImZpbGUiOiIuLi8uLi9zcmMvRW1wdHlTZWN0aW9uL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblByb3BzLCBGbGV4Qm94LCBUZXh0IH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQnO1xuaW1wb3J0IHsgSWxsdXN0cmF0aW9uUHJvcHMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1pbGx1c3RyYXRpb25zJztcbmltcG9ydCB7IERvdExvb3NlIH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQtcGF0dGVybnMnO1xuaW1wb3J0IHsgcHhSZW0sIHN0eWxlZE9wdGlvbnMsIHZhcmlhbnQgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHsgU3R5bGVQcm9wcyB9IGZyb20gJ0Bjb2RlY2FkZW15L3ZhcmlhbmNlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRHJvcGRvd25CdXR0b25Qcm9wcyB9IGZyb20gJy4uJztcblxuZXhwb3J0IHR5cGUgRW1wdHlTZWN0aW9uUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBQYXJhZ3JhcGggdGV4dCB0aGF0IGRpc3BsYXlzIGJlbmVhdGggdGhlIGhlYWRpbmcgdGV4dFxuICAgKi9cbiAgYm9keVRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEJ1dHRvbiBvciBkcm9wZG93biBidXR0b24gd2l0aCBhbiBhY3Rpb24gZm9yIHRoZSB1c2VyIHRvIHRha2VcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ8QnV0dG9uUHJvcHMgfCBEcm9wZG93bkJ1dHRvblByb3BzPjtcbiAgLyoqXG4gICAqIFRoZSBsYXJnZXIgaGVhZGluZyB0ZXh0IHRoYXQgYXBwZWFycyBvdmVyIHRoZSBib2R5IHRleHRcbiAgICovXG4gIGhlYWRpbmdUZXh0OiBzdHJpbmc7XG4gIGlsbHVzdHJhdGlvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxJbGx1c3RyYXRpb25Qcm9wcz47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBpbGx1c3RyYXRpb24gYXBwZWFycyB0byB0aGUgbGVmdCBvciByaWdodCBvZiB0aGUgcmVzdCBvZiB0aGUgc2VjdGlvbidzIGNvbnRlbnRcbiAgICovXG4gIGlsbHVzdHJhdGlvblBvc2l0aW9uPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHBhdHRlcm4gYmFja2dyb3VuZCBzdHJldGNoZXMgdG8gdGhlIGVuZCBvZiB0aGUgbGVmdCBvciByaWdodCBvZiB0aGUgdmlld3BvcnRcbiAgICovXG4gIHN0cmV0Y2hEaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCc7XG59O1xuXG5jb25zdCBFbXB0eUNvbnRhaW5lciA9IHN0eWxlZChGbGV4Qm94KShcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3N0cmV0Y2hEaXJlY3Rpb24nLFxuICAgIGRlZmF1bHRWYXJpYW50OiAnbGVmdCcsXG4gICAgYmFzZToge1xuICAgICAganVzdGlmeVNlbGY6ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBweDogMzIsXG4gICAgICBweTogeyBfOiA2NCwgbGc6IDk2IH0sXG4gICAgICB3aWR0aDogMSxcbiAgICB9LFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHBsOiB7IHNtOiAwIH0sXG4gICAgICAgIHByOiB7IHNtOiA2NCwgbGc6IDk2IH0sXG4gICAgICB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgcHI6IHsgc206IDAgfSxcbiAgICAgICAgcGw6IHsgc206IDY0LCBsZzogOTYgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IERvdHMgPSBzdHlsZWQoRG90TG9vc2UpKFxuICB2YXJpYW50KHtcbiAgICBwcm9wOiAnc3RyZXRjaERpcmVjdGlvbicsXG4gICAgZGVmYXVsdFZhcmlhbnQ6ICdsZWZ0JyxcbiAgICBiYXNlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6ICctNnJlbScsXG4gICAgICByaWdodDogJy02cmVtJyxcbiAgICB9LFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHJpZ2h0OiB7IHNtOiAwIH0sXG4gICAgICB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgbGVmdDogeyBzbTogMCB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgaWxsdXN0cmF0aW9uUG9zaXRpb25WYXJpYW50cyA9IHZhcmlhbnQoe1xuICBwcm9wOiAnaWxsdXN0cmF0aW9uUG9zaXRpb24nLFxuICBkZWZhdWx0VmFyaWFudDogJ3JpZ2h0JyxcbiAgYmFzZToge1xuICAgIG14OiB7IF86ICdhdXRvJywgc206IDAgfSxcbiAgICBtYjogeyBfOiAzMiwgc206IDAgfSxcbiAgfSxcbiAgdmFyaWFudHM6IHtcbiAgICBsZWZ0OiB7XG4gICAgICBtcjogeyBzbTogNDggfSxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICBtbDogeyBzbTogNDggfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbnR5cGUgSWxsdXN0cmF0aW9uQ29udGFpbmVyUHJvcHMgPSBTdHlsZVByb3BzPFxuICB0eXBlb2YgaWxsdXN0cmF0aW9uUG9zaXRpb25WYXJpYW50c1xuPjtcblxuY29uc3QgSWxsdXN0cmF0aW9uQ29udGFpbmVyID0gc3R5bGVkKFxuICAnZGl2JyxcbiAgc3R5bGVkT3B0aW9uc1xuKTxJbGx1c3RyYXRpb25Db250YWluZXJQcm9wcz4oaWxsdXN0cmF0aW9uUG9zaXRpb25WYXJpYW50cyk7XG5cbmV4cG9ydCBjb25zdCBFbXB0eVNlY3Rpb246IFJlYWN0LkZDPEVtcHR5U2VjdGlvblByb3BzPiA9ICh7XG4gIGJvZHlUZXh0LFxuICBjaGlsZHJlbixcbiAgaGVhZGluZ1RleHQsXG4gIGlsbHVzdHJhdGlvbjogSWxsdXN0cmF0aW9uLFxuICBzdHJldGNoRGlyZWN0aW9uLFxuICBpbGx1c3RyYXRpb25Qb3NpdGlvbiA9IHN0cmV0Y2hEaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnLFxufSkgPT4ge1xuICBjb25zdCBmbGV4RGlyZWN0aW9uID1cbiAgICBpbGx1c3RyYXRpb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/ICdyb3ctcmV2ZXJzZScgOiAncm93JztcblxuICByZXR1cm4gKFxuICAgIDxFbXB0eUNvbnRhaW5lciBzdHJldGNoRGlyZWN0aW9uPXtzdHJldGNoRGlyZWN0aW9ufT5cbiAgICAgIDxEb3RzIHN0cmV0Y2hEaXJlY3Rpb249e3N0cmV0Y2hEaXJlY3Rpb259IC8+XG4gICAgICA8RmxleEJveFxuICAgICAgICBtYXhXaWR0aD1cIjgyMnB4XCJcbiAgICAgICAgZmxleEJhc2lzPVwiMTAwJVwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBiZz1cImJhY2tncm91bmQtY3VycmVudFwiXG4gICAgICAgIHB5PXs0OH1cbiAgICAgICAgcHg9e3sgXzogMTYsIHNtOiA0OCwgbWQ6IDY0IH19XG4gICAgICAgIHpJbmRleD17MX1cbiAgICAgICAgZmxleERpcmVjdGlvbj17eyBfOiAnY29sdW1uJywgc206IGZsZXhEaXJlY3Rpb24gfX1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgXzogJ3NwYWNlLWFyb3VuZCcsIG1kOiAnc3BhY2UtYmV0d2VlbicgfX1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIHRleHRBbGlnbj17eyBfOiAnY2VudGVyJywgc206ICdzdGFydCcgfX1cbiAgICAgID5cbiAgICAgICAgPElsbHVzdHJhdGlvbkNvbnRhaW5lciBpbGx1c3RyYXRpb25Qb3NpdGlvbj17aWxsdXN0cmF0aW9uUG9zaXRpb259PlxuICAgICAgICAgIDxJbGx1c3RyYXRpb24gd2lkdGg9e3B4UmVtKDEwMCl9IC8+XG4gICAgICAgIDwvSWxsdXN0cmF0aW9uQ29udGFpbmVyPlxuICAgICAgICA8RmxleEJveFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9e3sgXzogJ2NlbnRlcicsIHNtOiAnc3RhcnQnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBhcz1cImgyXCIgZm9udFNpemU9ezIyfSBtYj17OH0+XG4gICAgICAgICAgICB7aGVhZGluZ1RleHR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IG1iPXszMn0+e2JvZHlUZXh0fTwvVGV4dD5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRmxleEJveD5cbiAgICAgIDwvRmxleEJveD5cbiAgICA8L0VtcHR5Q29udGFpbmVyPlxuICApO1xufTtcbiJdfQ== */");
var illustrationPositionVariants = variant({
  prop: 'illustrationPosition',
  defaultVariant: 'right',
  base: {
    mx: {
      _: 'auto',
      sm: 0
    },
    mb: {
      _: 32,
      sm: 0
    }
  },
  variants: {
    left: {
      mr: {
        sm: 48
      }
    },
    right: {
      ml: {
        sm: 48
      }
    }
  }
});
var IllustrationContainer = /*#__PURE__*/_styled('div', _extends({}, {
  target: "etfbdk10",
  label: "IllustrationContainer"
}, styledOptions))(illustrationPositionVariants, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbXB0eVNlY3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHOEIiLCJmaWxlIjoiLi4vLi4vc3JjL0VtcHR5U2VjdGlvbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcywgRmxleEJveCwgVGV4dCB9IGZyb20gJ0Bjb2RlY2FkZW15L2dhbXV0JztcbmltcG9ydCB7IElsbHVzdHJhdGlvblByb3BzIH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQtaWxsdXN0cmF0aW9ucyc7XG5pbXBvcnQgeyBEb3RMb29zZSB9IGZyb20gJ0Bjb2RlY2FkZW15L2dhbXV0LXBhdHRlcm5zJztcbmltcG9ydCB7IHB4UmVtLCBzdHlsZWRPcHRpb25zLCB2YXJpYW50IH0gZnJvbSAnQGNvZGVjYWRlbXkvZ2FtdXQtc3R5bGVzJztcbmltcG9ydCB7IFN0eWxlUHJvcHMgfSBmcm9tICdAY29kZWNhZGVteS92YXJpYW5jZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERyb3Bkb3duQnV0dG9uUHJvcHMgfSBmcm9tICcuLic7XG5cbmV4cG9ydCB0eXBlIEVtcHR5U2VjdGlvblByb3BzID0ge1xuICAvKipcbiAgICogUGFyYWdyYXBoIHRleHQgdGhhdCBkaXNwbGF5cyBiZW5lYXRoIHRoZSBoZWFkaW5nIHRleHRcbiAgICovXG4gIGJvZHlUZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCdXR0b24gb3IgZHJvcGRvd24gYnV0dG9uIHdpdGggYW4gYWN0aW9uIGZvciB0aGUgdXNlciB0byB0YWtlXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50PEJ1dHRvblByb3BzIHwgRHJvcGRvd25CdXR0b25Qcm9wcz47XG4gIC8qKlxuICAgKiBUaGUgbGFyZ2VyIGhlYWRpbmcgdGV4dCB0aGF0IGFwcGVhcnMgb3ZlciB0aGUgYm9keSB0ZXh0XG4gICAqL1xuICBoZWFkaW5nVGV4dDogc3RyaW5nO1xuICBpbGx1c3RyYXRpb246IFJlYWN0LkNvbXBvbmVudFR5cGU8SWxsdXN0cmF0aW9uUHJvcHM+O1xuICAvKipcbiAgICogV2hldGhlciB0aGUgaWxsdXN0cmF0aW9uIGFwcGVhcnMgdG8gdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhlIHJlc3Qgb2YgdGhlIHNlY3Rpb24ncyBjb250ZW50XG4gICAqL1xuICBpbGx1c3RyYXRpb25Qb3NpdGlvbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwYXR0ZXJuIGJhY2tncm91bmQgc3RyZXRjaGVzIHRvIHRoZSBlbmQgb2YgdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhlIHZpZXdwb3J0XG4gICAqL1xuICBzdHJldGNoRGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xufTtcblxuY29uc3QgRW1wdHlDb250YWluZXIgPSBzdHlsZWQoRmxleEJveCkoXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6ICdzdHJldGNoRGlyZWN0aW9uJyxcbiAgICBkZWZhdWx0VmFyaWFudDogJ2xlZnQnLFxuICAgIGJhc2U6IHtcbiAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcHg6IDMyLFxuICAgICAgcHk6IHsgXzogNjQsIGxnOiA5NiB9LFxuICAgICAgd2lkdGg6IDEsXG4gICAgfSxcbiAgICB2YXJpYW50czoge1xuICAgICAgbGVmdDoge1xuICAgICAgICBwbDogeyBzbTogMCB9LFxuICAgICAgICBwcjogeyBzbTogNjQsIGxnOiA5NiB9LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHByOiB7IHNtOiAwIH0sXG4gICAgICAgIHBsOiB7IHNtOiA2NCwgbGc6IDk2IH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBEb3RzID0gc3R5bGVkKERvdExvb3NlKShcbiAgdmFyaWFudCh7XG4gICAgcHJvcDogJ3N0cmV0Y2hEaXJlY3Rpb24nLFxuICAgIGRlZmF1bHRWYXJpYW50OiAnbGVmdCcsXG4gICAgYmFzZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAnLTZyZW0nLFxuICAgICAgcmlnaHQ6ICctNnJlbScsXG4gICAgfSxcbiAgICB2YXJpYW50czoge1xuICAgICAgbGVmdDoge1xuICAgICAgICByaWdodDogeyBzbTogMCB9LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIGxlZnQ6IHsgc206IDAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHMgPSB2YXJpYW50KHtcbiAgcHJvcDogJ2lsbHVzdHJhdGlvblBvc2l0aW9uJyxcbiAgZGVmYXVsdFZhcmlhbnQ6ICdyaWdodCcsXG4gIGJhc2U6IHtcbiAgICBteDogeyBfOiAnYXV0bycsIHNtOiAwIH0sXG4gICAgbWI6IHsgXzogMzIsIHNtOiAwIH0sXG4gIH0sXG4gIHZhcmlhbnRzOiB7XG4gICAgbGVmdDoge1xuICAgICAgbXI6IHsgc206IDQ4IH0sXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgbWw6IHsgc206IDQ4IH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG50eXBlIElsbHVzdHJhdGlvbkNvbnRhaW5lclByb3BzID0gU3R5bGVQcm9wczxcbiAgdHlwZW9mIGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHNcbj47XG5cbmNvbnN0IElsbHVzdHJhdGlvbkNvbnRhaW5lciA9IHN0eWxlZChcbiAgJ2RpdicsXG4gIHN0eWxlZE9wdGlvbnNcbik8SWxsdXN0cmF0aW9uQ29udGFpbmVyUHJvcHM+KGlsbHVzdHJhdGlvblBvc2l0aW9uVmFyaWFudHMpO1xuXG5leHBvcnQgY29uc3QgRW1wdHlTZWN0aW9uOiBSZWFjdC5GQzxFbXB0eVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBib2R5VGV4dCxcbiAgY2hpbGRyZW4sXG4gIGhlYWRpbmdUZXh0LFxuICBpbGx1c3RyYXRpb246IElsbHVzdHJhdGlvbixcbiAgc3RyZXRjaERpcmVjdGlvbixcbiAgaWxsdXN0cmF0aW9uUG9zaXRpb24gPSBzdHJldGNoRGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0Jyxcbn0pID0+IHtcbiAgY29uc3QgZmxleERpcmVjdGlvbiA9XG4gICAgaWxsdXN0cmF0aW9uUG9zaXRpb24gPT09ICdyaWdodCcgPyAncm93LXJldmVyc2UnIDogJ3Jvdyc7XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlDb250YWluZXIgc3RyZXRjaERpcmVjdGlvbj17c3RyZXRjaERpcmVjdGlvbn0+XG4gICAgICA8RG90cyBzdHJldGNoRGlyZWN0aW9uPXtzdHJldGNoRGlyZWN0aW9ufSAvPlxuICAgICAgPEZsZXhCb3hcbiAgICAgICAgbWF4V2lkdGg9XCI4MjJweFwiXG4gICAgICAgIGZsZXhCYXNpcz1cIjEwMCVcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgYmc9XCJiYWNrZ3JvdW5kLWN1cnJlbnRcIlxuICAgICAgICBweT17NDh9XG4gICAgICAgIHB4PXt7IF86IDE2LCBzbTogNDgsIG1kOiA2NCB9fVxuICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgIGZsZXhEaXJlY3Rpb249e3sgXzogJ2NvbHVtbicsIHNtOiBmbGV4RGlyZWN0aW9uIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PXt7IF86ICdzcGFjZS1hcm91bmQnLCBtZDogJ3NwYWNlLWJldHdlZW4nIH19XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICB0ZXh0QWxpZ249e3sgXzogJ2NlbnRlcicsIHNtOiAnc3RhcnQnIH19XG4gICAgICA+XG4gICAgICAgIDxJbGx1c3RyYXRpb25Db250YWluZXIgaWxsdXN0cmF0aW9uUG9zaXRpb249e2lsbHVzdHJhdGlvblBvc2l0aW9ufT5cbiAgICAgICAgICA8SWxsdXN0cmF0aW9uIHdpZHRoPXtweFJlbSgxMDApfSAvPlxuICAgICAgICA8L0lsbHVzdHJhdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPEZsZXhCb3hcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPXt7IF86ICdjZW50ZXInLCBzbTogJ3N0YXJ0JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgYXM9XCJoMlwiIGZvbnRTaXplPXsyMn0gbWI9ezh9PlxuICAgICAgICAgICAge2hlYWRpbmdUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBtYj17MzJ9Pntib2R5VGV4dH08L1RleHQ+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICA8L0ZsZXhCb3g+XG4gICAgPC9FbXB0eUNvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0= */");
export var EmptySection = function EmptySection(_ref) {
  var bodyText = _ref.bodyText,
    children = _ref.children,
    headingText = _ref.headingText,
    Illustration = _ref.illustration,
    stretchDirection = _ref.stretchDirection,
    _ref$illustrationPosi = _ref.illustrationPosition,
    illustrationPosition = _ref$illustrationPosi === void 0 ? stretchDirection === 'right' ? 'left' : 'right' : _ref$illustrationPosi;
  var flexDirection = illustrationPosition === 'right' ? 'row-reverse' : 'row';
  return /*#__PURE__*/_jsxs(EmptyContainer, {
    stretchDirection: stretchDirection,
    children: [/*#__PURE__*/_jsx(Dots, {
      stretchDirection: stretchDirection
    }), /*#__PURE__*/_jsxs(FlexBox, {
      maxWidth: "822px",
      flexBasis: "100%",
      position: "relative",
      bg: "background-current",
      py: 48,
      px: {
        _: 16,
        sm: 48,
        md: 64
      },
      zIndex: 1,
      flexDirection: {
        _: 'column',
        sm: flexDirection
      },
      justifyContent: {
        _: 'space-around',
        md: 'space-between'
      },
      alignItems: "center",
      textAlign: {
        _: 'center',
        sm: 'start'
      },
      children: [/*#__PURE__*/_jsx(IllustrationContainer, {
        illustrationPosition: illustrationPosition,
        children: /*#__PURE__*/_jsx(Illustration, {
          width: pxRem(100)
        })
      }), /*#__PURE__*/_jsxs(FlexBox, {
        flexDirection: "column",
        alignItems: {
          _: 'center',
          sm: 'start'
        },
        children: [/*#__PURE__*/_jsx(Text, {
          as: "h2",
          fontSize: 22,
          mb: 8,
          children: headingText
        }), /*#__PURE__*/_jsx(Text, {
          mb: 32,
          children: bodyText
        }), children]
      })]
    })]
  });
};