import { jsx as m } from "react/jsx-runtime";
import { styled as L } from "styled-components";
const F = {
  Color: {
    WHITE: "#FFF",
    BLACK: "#000",
    PRIMARY: "#557FFF",
    SECONDARY: "#FFADB4",
    ACCENT: "#F1FF5B",
    SECONDARY_ACCENT: "#919B36",
    ERROR: "#CF0000",
    BACKGROUND: "#FFF",
    SURFACE_PRIMARY: "#F5F5F5",
    SURFACE_ACCENT: "#FFADB4",
    ON_BACKGROUND: "#000",
    ON_SURFACE_PRIMARY: "#000",
    ON_SURFACE_ACCENT: "#FFF",
    ACTIVE: "#557FFF",
    BACKGROUND_ALPHA: "hsla(0, 0%, 100%, 0.9)",
    GREY: "#e6e6e6"
  },
  Font: {
    Size: {
      SMALL: "0.875rem",
      BODY_SMALL: "1rem",
      BODY: "1.25rem",
      BODY_LARGE: "1.5rem",
      BUTTON: "1.375rem",
      TITLE: "1.75rem",
      TITLE_TABLET: "2.1875rem",
      HEADING: "2.25rem",
      HEADING_TABLET: "3rem",
      LABEL: "clamp(0.875rem, 0.75rem + 0.526vw, 1.25rem)",
      LINK: "clamp(1.25rem, 1.167rem + 0.350vw, 1.5rem)",
      TITLE_LARGE: "clamp(1.25rem, 0.917rem + 1.403vw, 2.25rem)",
      SUBHEADING: "clamp(1.25rem, 1.084rem + 0.701vw, 1.75rem)",
      HEADING_LARGE: "clamp(1.75rem, 1.334rem + 1.754vw, 3rem)",
      DISPLAY: "clamp(2.25rem, 1.625rem + 2.631vw, 4.125rem)",
      DISPLAY_LARGE: "clamp(2.813rem, 1.875rem + 3.9474vw, 5.625rem)",
      QUOTE: "clamp(4.125rem, 2.375rem + 7.368vw, 9.375rem)",
      STAT: "clamp(3.825rem, 2.375rem + 7.068vw, 2.5cqi)",
      BIG_STAT: "clamp(5.225rem, 3.275rem + 7.268vw, 4cqi)",
      EX: "clamp(2rem, 3.5rem, 1cqi)"
    },
    Weight: {
      REGULAR: 400,
      BOLD: 700,
      BLACK: 900
    },
    LetterSpacing: {
      CLOSE: "-0.02em",
      NORMAL: "0.01em",
      LOOSE: "0.06em"
    },
    LineHeight: {
      NORMAL: 1,
      MEDIUM: 1.2,
      LOOSE: 1.5
    }
  }
}, { Color: e, Font: r } = F, R = L.button`
	contain: layout;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	min-inline-size: 17rem;
	min-block-size: 3.5rem;
	padding-inline: 1.5rem;
	border: 1px solid;
	font-size: ${r.Size.BODY};
	font-weight: ${r.Weight.BLACK};
	line-height: ${r.LineHeight.NORMAL};
	letter-spacing: ${r.LetterSpacing.NORMAL};
	background-color: ${e.WHITE};
	color: ${e.BLACK};
	border-color: ${e.BLACK};
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	&:hover,
	&:focus-visible {
			background-color: ${e.PRIMARY};
			color: ${e.WHITE};
	}
`;
function s({
  extendStyles: o,
  label: A,
  id: t,
  a11y: i,
  ref: n,
  submit: c = !1,
  disabled: l = !1,
  onClick: E
}) {
  return /* @__PURE__ */ m(
    R,
    {
      id: t,
      disabled: l,
      className: o,
      type: c ? "submit" : "button",
      onClick: E,
      ref: n,
      ...i,
      children: /* @__PURE__ */ m("span", { children: A })
    }
  );
}
export {
  s as Button
};
