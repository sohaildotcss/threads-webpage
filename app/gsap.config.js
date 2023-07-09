import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Avoid tree shaking for GSAP plugins
gsap.registerPlugin(CSSPlugin);

export default gsap;
