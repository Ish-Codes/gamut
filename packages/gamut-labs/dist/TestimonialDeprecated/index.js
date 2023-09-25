import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import { Anchor, Box, FlexBox, GridBox } from '@codecademy/gamut';
import { CheckerDense } from '@codecademy/gamut-patterns';
import { colors } from '@codecademy/gamut-styles';
import * as React from 'react';
import darkQuotes from '../assets/darkQuotes.svg';
import lightQuotes from '../assets/lightQuotes.svg';
import { Avatar } from '../Avatar';
import { Byline } from '../Byline';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var modes = {
  dark: {
    cardBackground: colors.navy,
    textColor: colors.beige,
    quoteIcon: darkQuotes
  },
  light: {
    cardBackground: colors.beige,
    textColor: colors.navy,
    quoteIcon: lightQuotes
  }
};
var Shadow = /*#__PURE__*/_styled(CheckerDense, {
  target: "e1d9okcf4",
  label: "Shadow"
})("display:block;position:absolute;bottom:0;right:0;height:calc(100% - 1rem);width:calc(100% - 1rem);color:", function (_ref) {
  var mode = _ref.mode;
  return modes[mode].cardBackground;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXN0aW1vbmlhbERlcHJlY2F0ZWQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCMEQiLCJmaWxlIjoiLi4vLi4vc3JjL1Rlc3RpbW9uaWFsRGVwcmVjYXRlZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgRmxleEJveCwgR3JpZEJveCwgVmlzdWFsVGhlbWUgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dCc7XG5pbXBvcnQgeyBDaGVja2VyRGVuc2UgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1wYXR0ZXJucyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZGFya1F1b3RlcyBmcm9tICcuLi9hc3NldHMvZGFya1F1b3Rlcy5zdmcnO1xuaW1wb3J0IGxpZ2h0UXVvdGVzIGZyb20gJy4uL2Fzc2V0cy9saWdodFF1b3Rlcy5zdmcnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL0J5bGluZSc7XG5cbmNvbnN0IG1vZGVzID0ge1xuICBkYXJrOiB7XG4gICAgY2FyZEJhY2tncm91bmQ6IGNvbG9ycy5uYXZ5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLmJlaWdlLFxuICAgIHF1b3RlSWNvbjogZGFya1F1b3RlcyxcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICBjYXJkQmFja2dyb3VuZDogY29sb3JzLmJlaWdlLFxuICAgIHRleHRDb2xvcjogY29sb3JzLm5hdnksXG4gICAgcXVvdGVJY29uOiBsaWdodFF1b3RlcyxcbiAgfSxcbn07XG5cbmNvbnN0IFNoYWRvdyA9IHN0eWxlZChDaGVja2VyRGVuc2UpPHsgbW9kZTogVmlzdWFsVGhlbWUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgY29sb3I6ICR7KHsgbW9kZSB9KSA9PiBtb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBUZXN0aW1vbmlhbENhcmQgPSBzdHlsZWQoR3JpZEJveCkoKTtcblxuY29uc3QgVGVzdGltb25pYWxXcmFwcGVyID0gc3R5bGVkKEJveCk8eyBtb2RlOiBWaXN1YWxUaGVtZSB9PmBcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgfVxuXG4gICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAkeyh7IG1vZGUgfSkgPT4gYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG4gICAgICBjb2xvcjogJHttb2Rlc1ttb2RlXS50ZXh0Q29sb3J9O1xuICAgIGB9XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDFyZW0gMXJlbSAwKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1b3RlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuYDtcblxuY29uc3QgUXVvdGVUZXh0ID0gc3R5bGVkLnFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcXVvdGVzOiBub25lO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemVbMjZdfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodC5iYXNlfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGVwcmVjYXRlZFByb3BzID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBxdW90ZTogc3RyaW5nO1xuICBtb2RlOiBWaXN1YWxUaGVtZTtcbiAgLyoqXG4gICAqIEFzc29jaWF0ZWQgd29ya3BsYWNlIG9yIGluc3RpdHV0aW9uXG4gICAqL1xuICBjb21wYW55Pzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXZhdGFyIHBvcnRyYWl0XG4gICAqL1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgbG9uZyBxdW90ZSB0byByZXBsYWNlIHRoZSB0ZXh0IHdpdGggYXQgU00gdmlld3BvcnRzIGFuZCBoaWdoZXIuXG4gICAqL1xuICBsb25nUXVvdGU/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgIFRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdXBkYXRlZCBzb29uLlxuICpcbiAqIFBsZWFzZSBjaGVjayB0aGUgZ2FtdXQgYm9hcmQgZm9yIHVwZGF0ZXMgb24gdGhlIG5ldyB2ZXJzaW9uIG9mIFRlc3RpbW9uaWFsXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsRGVwcmVjYXRlZDogUmVhY3QuRkM8VGVzdGltb25pYWxEZXByZWNhdGVkUHJvcHM+ID0gKHtcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgb2NjdXBhdGlvbixcbiAgcXVvdGUsXG4gIG1vZGUgPSAnbGlnaHQnLFxuICBjb21wYW55LFxuICBpbWFnZVVybCxcbiAgbG9uZ1F1b3RlLFxuICBocmVmLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUZXN0aW1vbmlhbFdyYXBwZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1vZGU9e21vZGV9PlxuICAgICAgPFNoYWRvdyBuYW1lPVwiY2hlY2tlckRlbnNlXCIgbW9kZT17bW9kZX0gLz5cbiAgICAgIDxBbmNob3JcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdmFyaWFudD1cImludGVyZmFjZVwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkPlxuICAgICAgICAgIDxGbGV4Qm94XG4gICAgICAgICAgICBweD17eyBfOiAyNCB9fVxuICAgICAgICAgICAgcHQ9e3sgXzogMzIgfX1cbiAgICAgICAgICAgIHBiPXt7IF86IDQ4IH19XG4gICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj17bW9kZSA9PT0gJ2RhcmsnID8gJ2JlaWdlJyA6ICduYXZ5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc3cHhcIiBoZWlnaHQ9XCI3N3B4XCIgbWI9ezQ4fSBtcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJcIiBzcmM9e2ltYWdlVXJsfSBtb2RlPXttb2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Qm94IG1iPXsxNn0gbXI9ezE2fSBtaW5XaWR0aD1cIjkuNXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCeWxpbmVcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17b2NjdXBhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhHcm93PXs5OTk5fSBmbGV4U2hyaW5rPXsxfSBmbGV4QmFzaXM9XCIwXCIgbWluV2lkdGg9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlSWNvblxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5cHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e21vZGVzW21vZGVdLnF1b3RlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxRdW90ZVRleHQ+XG4gICAgICAgICAgICAgICAgICB7bG9uZ1F1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT17eyBfOiAnaW5pdGlhbCcsIHNtOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBkaXNwbGF5PXt7IF86ICdub25lJywgc206ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb25nUXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9RdW90ZVRleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsQ2FyZD5cbiAgICAgIDwvQW5jaG9yPlxuICAgIDwvVGVzdGltb25pYWxXcmFwcGVyPlxuICApO1xufTtcbiJdfQ== */"));
var TestimonialCard = /*#__PURE__*/_styled(GridBox, {
  target: "e1d9okcf3",
  label: "TestimonialCard"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXN0aW1vbmlhbERlcHJlY2F0ZWQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDd0IiLCJmaWxlIjoiLi4vLi4vc3JjL1Rlc3RpbW9uaWFsRGVwcmVjYXRlZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgRmxleEJveCwgR3JpZEJveCwgVmlzdWFsVGhlbWUgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dCc7XG5pbXBvcnQgeyBDaGVja2VyRGVuc2UgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1wYXR0ZXJucyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZGFya1F1b3RlcyBmcm9tICcuLi9hc3NldHMvZGFya1F1b3Rlcy5zdmcnO1xuaW1wb3J0IGxpZ2h0UXVvdGVzIGZyb20gJy4uL2Fzc2V0cy9saWdodFF1b3Rlcy5zdmcnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL0J5bGluZSc7XG5cbmNvbnN0IG1vZGVzID0ge1xuICBkYXJrOiB7XG4gICAgY2FyZEJhY2tncm91bmQ6IGNvbG9ycy5uYXZ5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLmJlaWdlLFxuICAgIHF1b3RlSWNvbjogZGFya1F1b3RlcyxcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICBjYXJkQmFja2dyb3VuZDogY29sb3JzLmJlaWdlLFxuICAgIHRleHRDb2xvcjogY29sb3JzLm5hdnksXG4gICAgcXVvdGVJY29uOiBsaWdodFF1b3RlcyxcbiAgfSxcbn07XG5cbmNvbnN0IFNoYWRvdyA9IHN0eWxlZChDaGVja2VyRGVuc2UpPHsgbW9kZTogVmlzdWFsVGhlbWUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgY29sb3I6ICR7KHsgbW9kZSB9KSA9PiBtb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBUZXN0aW1vbmlhbENhcmQgPSBzdHlsZWQoR3JpZEJveCkoKTtcblxuY29uc3QgVGVzdGltb25pYWxXcmFwcGVyID0gc3R5bGVkKEJveCk8eyBtb2RlOiBWaXN1YWxUaGVtZSB9PmBcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgfVxuXG4gICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAkeyh7IG1vZGUgfSkgPT4gYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG4gICAgICBjb2xvcjogJHttb2Rlc1ttb2RlXS50ZXh0Q29sb3J9O1xuICAgIGB9XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDFyZW0gMXJlbSAwKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1b3RlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuYDtcblxuY29uc3QgUXVvdGVUZXh0ID0gc3R5bGVkLnFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcXVvdGVzOiBub25lO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemVbMjZdfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodC5iYXNlfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGVwcmVjYXRlZFByb3BzID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBxdW90ZTogc3RyaW5nO1xuICBtb2RlOiBWaXN1YWxUaGVtZTtcbiAgLyoqXG4gICAqIEFzc29jaWF0ZWQgd29ya3BsYWNlIG9yIGluc3RpdHV0aW9uXG4gICAqL1xuICBjb21wYW55Pzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXZhdGFyIHBvcnRyYWl0XG4gICAqL1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgbG9uZyBxdW90ZSB0byByZXBsYWNlIHRoZSB0ZXh0IHdpdGggYXQgU00gdmlld3BvcnRzIGFuZCBoaWdoZXIuXG4gICAqL1xuICBsb25nUXVvdGU/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgIFRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdXBkYXRlZCBzb29uLlxuICpcbiAqIFBsZWFzZSBjaGVjayB0aGUgZ2FtdXQgYm9hcmQgZm9yIHVwZGF0ZXMgb24gdGhlIG5ldyB2ZXJzaW9uIG9mIFRlc3RpbW9uaWFsXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsRGVwcmVjYXRlZDogUmVhY3QuRkM8VGVzdGltb25pYWxEZXByZWNhdGVkUHJvcHM+ID0gKHtcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgb2NjdXBhdGlvbixcbiAgcXVvdGUsXG4gIG1vZGUgPSAnbGlnaHQnLFxuICBjb21wYW55LFxuICBpbWFnZVVybCxcbiAgbG9uZ1F1b3RlLFxuICBocmVmLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUZXN0aW1vbmlhbFdyYXBwZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1vZGU9e21vZGV9PlxuICAgICAgPFNoYWRvdyBuYW1lPVwiY2hlY2tlckRlbnNlXCIgbW9kZT17bW9kZX0gLz5cbiAgICAgIDxBbmNob3JcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdmFyaWFudD1cImludGVyZmFjZVwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkPlxuICAgICAgICAgIDxGbGV4Qm94XG4gICAgICAgICAgICBweD17eyBfOiAyNCB9fVxuICAgICAgICAgICAgcHQ9e3sgXzogMzIgfX1cbiAgICAgICAgICAgIHBiPXt7IF86IDQ4IH19XG4gICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj17bW9kZSA9PT0gJ2RhcmsnID8gJ2JlaWdlJyA6ICduYXZ5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc3cHhcIiBoZWlnaHQ9XCI3N3B4XCIgbWI9ezQ4fSBtcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJcIiBzcmM9e2ltYWdlVXJsfSBtb2RlPXttb2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Qm94IG1iPXsxNn0gbXI9ezE2fSBtaW5XaWR0aD1cIjkuNXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCeWxpbmVcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17b2NjdXBhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhHcm93PXs5OTk5fSBmbGV4U2hyaW5rPXsxfSBmbGV4QmFzaXM9XCIwXCIgbWluV2lkdGg9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlSWNvblxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5cHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e21vZGVzW21vZGVdLnF1b3RlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxRdW90ZVRleHQ+XG4gICAgICAgICAgICAgICAgICB7bG9uZ1F1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT17eyBfOiAnaW5pdGlhbCcsIHNtOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBkaXNwbGF5PXt7IF86ICdub25lJywgc206ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb25nUXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9RdW90ZVRleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsQ2FyZD5cbiAgICAgIDwvQW5jaG9yPlxuICAgIDwvVGVzdGltb25pYWxXcmFwcGVyPlxuICApO1xufTtcbiJdfQ== */");
var TestimonialWrapper = /*#__PURE__*/_styled(Box, {
  target: "e1d9okcf2",
  label: "TestimonialWrapper"
})("height:100%;&:hover{", TestimonialCard, "{transform:scale(1.02);}}", TestimonialCard, "{align-content:center;height:100%;", function (_ref2) {
  var mode = _ref2.mode;
  return "\n      background-color: ".concat(modes[mode].cardBackground, ";\n      color: ").concat(modes[mode].textColor, ";\n    ");
}, " clip-path:inset(0 1rem 1rem 0);overflow-y:hidden;padding-right:1rem;padding-bottom:1rem;position:relative;transition:transform 0.3s ease-in-out;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXN0aW1vbmlhbERlcHJlY2F0ZWQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DNkQiLCJmaWxlIjoiLi4vLi4vc3JjL1Rlc3RpbW9uaWFsRGVwcmVjYXRlZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgRmxleEJveCwgR3JpZEJveCwgVmlzdWFsVGhlbWUgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dCc7XG5pbXBvcnQgeyBDaGVja2VyRGVuc2UgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1wYXR0ZXJucyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZGFya1F1b3RlcyBmcm9tICcuLi9hc3NldHMvZGFya1F1b3Rlcy5zdmcnO1xuaW1wb3J0IGxpZ2h0UXVvdGVzIGZyb20gJy4uL2Fzc2V0cy9saWdodFF1b3Rlcy5zdmcnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL0J5bGluZSc7XG5cbmNvbnN0IG1vZGVzID0ge1xuICBkYXJrOiB7XG4gICAgY2FyZEJhY2tncm91bmQ6IGNvbG9ycy5uYXZ5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLmJlaWdlLFxuICAgIHF1b3RlSWNvbjogZGFya1F1b3RlcyxcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICBjYXJkQmFja2dyb3VuZDogY29sb3JzLmJlaWdlLFxuICAgIHRleHRDb2xvcjogY29sb3JzLm5hdnksXG4gICAgcXVvdGVJY29uOiBsaWdodFF1b3RlcyxcbiAgfSxcbn07XG5cbmNvbnN0IFNoYWRvdyA9IHN0eWxlZChDaGVja2VyRGVuc2UpPHsgbW9kZTogVmlzdWFsVGhlbWUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgY29sb3I6ICR7KHsgbW9kZSB9KSA9PiBtb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBUZXN0aW1vbmlhbENhcmQgPSBzdHlsZWQoR3JpZEJveCkoKTtcblxuY29uc3QgVGVzdGltb25pYWxXcmFwcGVyID0gc3R5bGVkKEJveCk8eyBtb2RlOiBWaXN1YWxUaGVtZSB9PmBcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgfVxuXG4gICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAkeyh7IG1vZGUgfSkgPT4gYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG4gICAgICBjb2xvcjogJHttb2Rlc1ttb2RlXS50ZXh0Q29sb3J9O1xuICAgIGB9XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDFyZW0gMXJlbSAwKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1b3RlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuYDtcblxuY29uc3QgUXVvdGVUZXh0ID0gc3R5bGVkLnFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcXVvdGVzOiBub25lO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemVbMjZdfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodC5iYXNlfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGVwcmVjYXRlZFByb3BzID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBxdW90ZTogc3RyaW5nO1xuICBtb2RlOiBWaXN1YWxUaGVtZTtcbiAgLyoqXG4gICAqIEFzc29jaWF0ZWQgd29ya3BsYWNlIG9yIGluc3RpdHV0aW9uXG4gICAqL1xuICBjb21wYW55Pzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXZhdGFyIHBvcnRyYWl0XG4gICAqL1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgbG9uZyBxdW90ZSB0byByZXBsYWNlIHRoZSB0ZXh0IHdpdGggYXQgU00gdmlld3BvcnRzIGFuZCBoaWdoZXIuXG4gICAqL1xuICBsb25nUXVvdGU/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgIFRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdXBkYXRlZCBzb29uLlxuICpcbiAqIFBsZWFzZSBjaGVjayB0aGUgZ2FtdXQgYm9hcmQgZm9yIHVwZGF0ZXMgb24gdGhlIG5ldyB2ZXJzaW9uIG9mIFRlc3RpbW9uaWFsXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsRGVwcmVjYXRlZDogUmVhY3QuRkM8VGVzdGltb25pYWxEZXByZWNhdGVkUHJvcHM+ID0gKHtcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgb2NjdXBhdGlvbixcbiAgcXVvdGUsXG4gIG1vZGUgPSAnbGlnaHQnLFxuICBjb21wYW55LFxuICBpbWFnZVVybCxcbiAgbG9uZ1F1b3RlLFxuICBocmVmLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUZXN0aW1vbmlhbFdyYXBwZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1vZGU9e21vZGV9PlxuICAgICAgPFNoYWRvdyBuYW1lPVwiY2hlY2tlckRlbnNlXCIgbW9kZT17bW9kZX0gLz5cbiAgICAgIDxBbmNob3JcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdmFyaWFudD1cImludGVyZmFjZVwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkPlxuICAgICAgICAgIDxGbGV4Qm94XG4gICAgICAgICAgICBweD17eyBfOiAyNCB9fVxuICAgICAgICAgICAgcHQ9e3sgXzogMzIgfX1cbiAgICAgICAgICAgIHBiPXt7IF86IDQ4IH19XG4gICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj17bW9kZSA9PT0gJ2RhcmsnID8gJ2JlaWdlJyA6ICduYXZ5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc3cHhcIiBoZWlnaHQ9XCI3N3B4XCIgbWI9ezQ4fSBtcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJcIiBzcmM9e2ltYWdlVXJsfSBtb2RlPXttb2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Qm94IG1iPXsxNn0gbXI9ezE2fSBtaW5XaWR0aD1cIjkuNXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCeWxpbmVcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17b2NjdXBhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhHcm93PXs5OTk5fSBmbGV4U2hyaW5rPXsxfSBmbGV4QmFzaXM9XCIwXCIgbWluV2lkdGg9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlSWNvblxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5cHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e21vZGVzW21vZGVdLnF1b3RlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxRdW90ZVRleHQ+XG4gICAgICAgICAgICAgICAgICB7bG9uZ1F1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT17eyBfOiAnaW5pdGlhbCcsIHNtOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBkaXNwbGF5PXt7IF86ICdub25lJywgc206ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb25nUXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9RdW90ZVRleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsQ2FyZD5cbiAgICAgIDwvQW5jaG9yPlxuICAgIDwvVGVzdGltb25pYWxXcmFwcGVyPlxuICApO1xufTtcbiJdfQ== */"));
var QuoteIcon = /*#__PURE__*/_styled("img", {
  target: "e1d9okcf1",
  label: "QuoteIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "9cwtri",
  styles: "display:block;margin-bottom:-2.5rem"
} : {
  name: "9cwtri",
  styles: "display:block;margin-bottom:-2.5rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXN0aW1vbmlhbERlcHJlY2F0ZWQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZENEIiLCJmaWxlIjoiLi4vLi4vc3JjL1Rlc3RpbW9uaWFsRGVwcmVjYXRlZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgRmxleEJveCwgR3JpZEJveCwgVmlzdWFsVGhlbWUgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dCc7XG5pbXBvcnQgeyBDaGVja2VyRGVuc2UgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1wYXR0ZXJucyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZGFya1F1b3RlcyBmcm9tICcuLi9hc3NldHMvZGFya1F1b3Rlcy5zdmcnO1xuaW1wb3J0IGxpZ2h0UXVvdGVzIGZyb20gJy4uL2Fzc2V0cy9saWdodFF1b3Rlcy5zdmcnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL0J5bGluZSc7XG5cbmNvbnN0IG1vZGVzID0ge1xuICBkYXJrOiB7XG4gICAgY2FyZEJhY2tncm91bmQ6IGNvbG9ycy5uYXZ5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLmJlaWdlLFxuICAgIHF1b3RlSWNvbjogZGFya1F1b3RlcyxcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICBjYXJkQmFja2dyb3VuZDogY29sb3JzLmJlaWdlLFxuICAgIHRleHRDb2xvcjogY29sb3JzLm5hdnksXG4gICAgcXVvdGVJY29uOiBsaWdodFF1b3RlcyxcbiAgfSxcbn07XG5cbmNvbnN0IFNoYWRvdyA9IHN0eWxlZChDaGVja2VyRGVuc2UpPHsgbW9kZTogVmlzdWFsVGhlbWUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgY29sb3I6ICR7KHsgbW9kZSB9KSA9PiBtb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBUZXN0aW1vbmlhbENhcmQgPSBzdHlsZWQoR3JpZEJveCkoKTtcblxuY29uc3QgVGVzdGltb25pYWxXcmFwcGVyID0gc3R5bGVkKEJveCk8eyBtb2RlOiBWaXN1YWxUaGVtZSB9PmBcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgfVxuXG4gICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAkeyh7IG1vZGUgfSkgPT4gYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG4gICAgICBjb2xvcjogJHttb2Rlc1ttb2RlXS50ZXh0Q29sb3J9O1xuICAgIGB9XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDFyZW0gMXJlbSAwKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1b3RlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuYDtcblxuY29uc3QgUXVvdGVUZXh0ID0gc3R5bGVkLnFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcXVvdGVzOiBub25lO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemVbMjZdfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodC5iYXNlfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGVwcmVjYXRlZFByb3BzID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBxdW90ZTogc3RyaW5nO1xuICBtb2RlOiBWaXN1YWxUaGVtZTtcbiAgLyoqXG4gICAqIEFzc29jaWF0ZWQgd29ya3BsYWNlIG9yIGluc3RpdHV0aW9uXG4gICAqL1xuICBjb21wYW55Pzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXZhdGFyIHBvcnRyYWl0XG4gICAqL1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgbG9uZyBxdW90ZSB0byByZXBsYWNlIHRoZSB0ZXh0IHdpdGggYXQgU00gdmlld3BvcnRzIGFuZCBoaWdoZXIuXG4gICAqL1xuICBsb25nUXVvdGU/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgIFRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdXBkYXRlZCBzb29uLlxuICpcbiAqIFBsZWFzZSBjaGVjayB0aGUgZ2FtdXQgYm9hcmQgZm9yIHVwZGF0ZXMgb24gdGhlIG5ldyB2ZXJzaW9uIG9mIFRlc3RpbW9uaWFsXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsRGVwcmVjYXRlZDogUmVhY3QuRkM8VGVzdGltb25pYWxEZXByZWNhdGVkUHJvcHM+ID0gKHtcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgb2NjdXBhdGlvbixcbiAgcXVvdGUsXG4gIG1vZGUgPSAnbGlnaHQnLFxuICBjb21wYW55LFxuICBpbWFnZVVybCxcbiAgbG9uZ1F1b3RlLFxuICBocmVmLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUZXN0aW1vbmlhbFdyYXBwZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1vZGU9e21vZGV9PlxuICAgICAgPFNoYWRvdyBuYW1lPVwiY2hlY2tlckRlbnNlXCIgbW9kZT17bW9kZX0gLz5cbiAgICAgIDxBbmNob3JcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdmFyaWFudD1cImludGVyZmFjZVwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkPlxuICAgICAgICAgIDxGbGV4Qm94XG4gICAgICAgICAgICBweD17eyBfOiAyNCB9fVxuICAgICAgICAgICAgcHQ9e3sgXzogMzIgfX1cbiAgICAgICAgICAgIHBiPXt7IF86IDQ4IH19XG4gICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj17bW9kZSA9PT0gJ2RhcmsnID8gJ2JlaWdlJyA6ICduYXZ5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc3cHhcIiBoZWlnaHQ9XCI3N3B4XCIgbWI9ezQ4fSBtcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJcIiBzcmM9e2ltYWdlVXJsfSBtb2RlPXttb2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Qm94IG1iPXsxNn0gbXI9ezE2fSBtaW5XaWR0aD1cIjkuNXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCeWxpbmVcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17b2NjdXBhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhHcm93PXs5OTk5fSBmbGV4U2hyaW5rPXsxfSBmbGV4QmFzaXM9XCIwXCIgbWluV2lkdGg9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlSWNvblxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5cHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e21vZGVzW21vZGVdLnF1b3RlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxRdW90ZVRleHQ+XG4gICAgICAgICAgICAgICAgICB7bG9uZ1F1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT17eyBfOiAnaW5pdGlhbCcsIHNtOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBkaXNwbGF5PXt7IF86ICdub25lJywgc206ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb25nUXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9RdW90ZVRleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsQ2FyZD5cbiAgICAgIDwvQW5jaG9yPlxuICAgIDwvVGVzdGltb25pYWxXcmFwcGVyPlxuICApO1xufTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var QuoteText = /*#__PURE__*/_styled("q", {
  target: "e1d9okcf0",
  label: "QuoteText"
})("position:relative;quotes:none;font-size:", function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSize[26];
}, ";line-height:", function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeight.base;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXN0aW1vbmlhbERlcHJlY2F0ZWQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFMEIiLCJmaWxlIjoiLi4vLi4vc3JjL1Rlc3RpbW9uaWFsRGVwcmVjYXRlZC9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgRmxleEJveCwgR3JpZEJveCwgVmlzdWFsVGhlbWUgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dCc7XG5pbXBvcnQgeyBDaGVja2VyRGVuc2UgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1wYXR0ZXJucyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAY29kZWNhZGVteS9nYW11dC1zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZGFya1F1b3RlcyBmcm9tICcuLi9hc3NldHMvZGFya1F1b3Rlcy5zdmcnO1xuaW1wb3J0IGxpZ2h0UXVvdGVzIGZyb20gJy4uL2Fzc2V0cy9saWdodFF1b3Rlcy5zdmcnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL0J5bGluZSc7XG5cbmNvbnN0IG1vZGVzID0ge1xuICBkYXJrOiB7XG4gICAgY2FyZEJhY2tncm91bmQ6IGNvbG9ycy5uYXZ5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLmJlaWdlLFxuICAgIHF1b3RlSWNvbjogZGFya1F1b3RlcyxcbiAgfSxcbiAgbGlnaHQ6IHtcbiAgICBjYXJkQmFja2dyb3VuZDogY29sb3JzLmJlaWdlLFxuICAgIHRleHRDb2xvcjogY29sb3JzLm5hdnksXG4gICAgcXVvdGVJY29uOiBsaWdodFF1b3RlcyxcbiAgfSxcbn07XG5cbmNvbnN0IFNoYWRvdyA9IHN0eWxlZChDaGVja2VyRGVuc2UpPHsgbW9kZTogVmlzdWFsVGhlbWUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgY29sb3I6ICR7KHsgbW9kZSB9KSA9PiBtb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBUZXN0aW1vbmlhbENhcmQgPSBzdHlsZWQoR3JpZEJveCkoKTtcblxuY29uc3QgVGVzdGltb25pYWxXcmFwcGVyID0gc3R5bGVkKEJveCk8eyBtb2RlOiBWaXN1YWxUaGVtZSB9PmBcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgfVxuXG4gICR7VGVzdGltb25pYWxDYXJkfSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAkeyh7IG1vZGUgfSkgPT4gYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2Rlc1ttb2RlXS5jYXJkQmFja2dyb3VuZH07XG4gICAgICBjb2xvcjogJHttb2Rlc1ttb2RlXS50ZXh0Q29sb3J9O1xuICAgIGB9XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDFyZW0gMXJlbSAwKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1b3RlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuYDtcblxuY29uc3QgUXVvdGVUZXh0ID0gc3R5bGVkLnFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcXVvdGVzOiBub25lO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemVbMjZdfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodC5iYXNlfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGVwcmVjYXRlZFByb3BzID0ge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBxdW90ZTogc3RyaW5nO1xuICBtb2RlOiBWaXN1YWxUaGVtZTtcbiAgLyoqXG4gICAqIEFzc29jaWF0ZWQgd29ya3BsYWNlIG9yIGluc3RpdHV0aW9uXG4gICAqL1xuICBjb21wYW55Pzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXZhdGFyIHBvcnRyYWl0XG4gICAqL1xuICBpbWFnZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgbG9uZyBxdW90ZSB0byByZXBsYWNlIHRoZSB0ZXh0IHdpdGggYXQgU00gdmlld3BvcnRzIGFuZCBoaWdoZXIuXG4gICAqL1xuICBsb25nUXVvdGU/OiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgIFRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgdXBkYXRlZCBzb29uLlxuICpcbiAqIFBsZWFzZSBjaGVjayB0aGUgZ2FtdXQgYm9hcmQgZm9yIHVwZGF0ZXMgb24gdGhlIG5ldyB2ZXJzaW9uIG9mIFRlc3RpbW9uaWFsXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRlc3RpbW9uaWFsRGVwcmVjYXRlZDogUmVhY3QuRkM8VGVzdGltb25pYWxEZXByZWNhdGVkUHJvcHM+ID0gKHtcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgb2NjdXBhdGlvbixcbiAgcXVvdGUsXG4gIG1vZGUgPSAnbGlnaHQnLFxuICBjb21wYW55LFxuICBpbWFnZVVybCxcbiAgbG9uZ1F1b3RlLFxuICBocmVmLFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUZXN0aW1vbmlhbFdyYXBwZXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG1vZGU9e21vZGV9PlxuICAgICAgPFNoYWRvdyBuYW1lPVwiY2hlY2tlckRlbnNlXCIgbW9kZT17bW9kZX0gLz5cbiAgICAgIDxBbmNob3JcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdmFyaWFudD1cImludGVyZmFjZVwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIGhlaWdodD1cImluaGVyaXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8VGVzdGltb25pYWxDYXJkPlxuICAgICAgICAgIDxGbGV4Qm94XG4gICAgICAgICAgICBweD17eyBfOiAyNCB9fVxuICAgICAgICAgICAgcHQ9e3sgXzogMzIgfX1cbiAgICAgICAgICAgIHBiPXt7IF86IDQ4IH19XG4gICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj17bW9kZSA9PT0gJ2RhcmsnID8gJ2JlaWdlJyA6ICduYXZ5J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjc3cHhcIiBoZWlnaHQ9XCI3N3B4XCIgbWI9ezQ4fSBtcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJcIiBzcmM9e2ltYWdlVXJsfSBtb2RlPXttb2RlfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Qm94IG1iPXsxNn0gbXI9ezE2fSBtaW5XaWR0aD1cIjkuNXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCeWxpbmVcbiAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17b2NjdXBhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhHcm93PXs5OTk5fSBmbGV4U2hyaW5rPXsxfSBmbGV4QmFzaXM9XCIwXCIgbWluV2lkdGg9XCI3MCVcIj5cbiAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlSWNvblxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5cHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e21vZGVzW21vZGVdLnF1b3RlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxRdW90ZVRleHQ+XG4gICAgICAgICAgICAgICAgICB7bG9uZ1F1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT17eyBfOiAnaW5pdGlhbCcsIHNtOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBkaXNwbGF5PXt7IF86ICdub25lJywgc206ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb25nUXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9RdW90ZVRleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICA8L1Rlc3RpbW9uaWFsQ2FyZD5cbiAgICAgIDwvQW5jaG9yPlxuICAgIDwvVGVzdGltb25pYWxXcmFwcGVyPlxuICApO1xufTtcbiJdfQ== */"));
/**
 * @deprecated  This component is deprecated and will be updated soon.
 *
 * Please check the gamut board for updates on the new version of Testimonial
 */

export var TestimonialDeprecated = function TestimonialDeprecated(_ref5) {
  var firstName = _ref5.firstName,
    lastName = _ref5.lastName,
    occupation = _ref5.occupation,
    quote = _ref5.quote,
    _ref5$mode = _ref5.mode,
    mode = _ref5$mode === void 0 ? 'light' : _ref5$mode,
    company = _ref5.company,
    imageUrl = _ref5.imageUrl,
    longQuote = _ref5.longQuote,
    href = _ref5.href,
    onClick = _ref5.onClick;
  return /*#__PURE__*/_jsxs(TestimonialWrapper, {
    position: "relative",
    mode: mode,
    children: [/*#__PURE__*/_jsx(Shadow, {
      name: "checkerDense",
      mode: mode
    }), /*#__PURE__*/_jsx(Anchor, {
      href: href,
      variant: "interface",
      display: "block",
      height: "inherit",
      onClick: onClick,
      children: /*#__PURE__*/_jsx(TestimonialCard, {
        children: /*#__PURE__*/_jsxs(FlexBox, {
          px: {
            _: 24
          },
          pt: {
            _: 32
          },
          pb: {
            _: 48
          },
          flexWrap: "wrap",
          alignItems: "start",
          textColor: mode === 'dark' ? 'beige' : 'navy',
          children: [/*#__PURE__*/_jsxs(FlexBox, {
            flexDirection: "column",
            children: [imageUrl && /*#__PURE__*/_jsx(Box, {
              width: "77px",
              height: "77px",
              mb: 48,
              mr: 16,
              children: /*#__PURE__*/_jsx(Avatar, {
                alt: "",
                src: imageUrl,
                mode: mode
              })
            }), /*#__PURE__*/_jsx(Box, {
              mb: 16,
              mr: 16,
              minWidth: "9.5rem",
              children: /*#__PURE__*/_jsx(Byline, {
                firstName: firstName,
                occupation: occupation,
                company: company,
                lastName: lastName
              })
            })]
          }), /*#__PURE__*/_jsx(Box, {
            flexGrow: 9999,
            flexShrink: 1,
            flexBasis: "0",
            minWidth: "70%",
            children: /*#__PURE__*/_jsxs(Box, {
              position: "relative",
              children: [/*#__PURE__*/_jsx(QuoteIcon, {
                alt: "",
                width: "109px",
                height: "74px",
                src: modes[mode].quoteIcon
              }), /*#__PURE__*/_jsx(QuoteText, {
                children: longQuote ? /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsx(Box, {
                    as: "span",
                    display: {
                      _: 'initial',
                      sm: 'none'
                    },
                    children: quote
                  }), /*#__PURE__*/_jsx(Box, {
                    as: "span",
                    display: {
                      _: 'none',
                      sm: 'initial'
                    },
                    children: longQuote
                  })]
                }) : quote
              })]
            })
          })]
        })
      })
    })]
  });
};