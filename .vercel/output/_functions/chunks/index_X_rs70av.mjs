import { S as createAstro, _ as createRenderInstruction, b as unescapeHTML, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate } from "./server_CW89OMP0.mjs";
import { i as createComponent, n as $$Image } from "./_astro_assets_Cj2dHyzy.mjs";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ValidationError, useForm } from "@formspree/react";
import { doc, getDoc, getFirestore, increment, onSnapshot, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://naveed-dev-weld.vercel.app");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title } = Astro.props;
	const siteName = "Naveed Ahmed Portfolio";
	const description = "Naveed Ahmed - Full-Stack Developer from Pakistan specializing in MERN Stack, React, Next.js, and Node.js. Available for hire to build scalable web applications.";
	const ogImage = "/og.image.png";
	const siteUrl = "https://naveed-dev-weld.vercel.app";
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="Full-Stack Developer Pakistan, MERN Stack Developer, React Developer Pakistan, Node.js Developer, Next.js Developer, hire web developer Pakistan, JavaScript developer, MongoDB Express React Node"><meta name="author" content="Naveed Ahmed"><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(siteUrl, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(siteUrl, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><link rel="icon" type="image" href="/favicon.ico"><meta name="google-site-verification" content="Uht5KEUhm7MosWB1FXdBCIWjYyIGCsyS-1QBTsw7XXk"><link rel="preload" href="/fonts/montserrat-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin="anonymous"><script type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Naveed Ahmed",
		alternateName: "Naveed",
		url: siteUrl,
		image: `${siteUrl}${ogImage}`,
		sameAs: ["https://github.com/Naveed17", "https://www.linkedin.com/in/naveedahmed-webdev-js/"],
		jobTitle: "Full-Stack Developer",
		description,
		address: {
			"@type": "PostalAddress",
			addressCountry: "PK"
		},
		knowsAbout: [
			"React",
			"Node.js",
			"Next.js",
			"MongoDB",
			"Express",
			"TypeScript",
			"MERN Stack",
			"Full-Stack Development"
		]
	}))}<\/script>${renderHead($$result)}</head><body class="bg-[var(--background)] text-[var(--white)] sm:px-28 lg:px-20 px-9 transition-colors duration-300">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "D:/portfolio-next/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/nav.astro
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-center w-full" data-astro-cid-jbsoqdrt><nav id="main-nav" class="fixed inset-x-0 z-[100] mx-auto bg-[var(--background)] border border-transparent backdrop-blur-xl transition-[width,background-color,border-color,border-radius] duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%]" data-astro-cid-jbsoqdrt><div class="container mx-auto flex justify-center items-center p-3" data-astro-cid-jbsoqdrt><ul class="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6" data-astro-cid-jbsoqdrt>${[
		{
			label: "Home",
			href: "#home",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`
		},
		{
			label: "Projects",
			href: "#projects",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>`
		},
		{
			label: "Contact",
			href: "#contact",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>`
		}
	].map((item) => renderTemplate`<li class="flex-1 md:flex-none" data-astro-cid-jbsoqdrt><a data-nav-link${addAttribute(item.href, "href")} class="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-base relative group" data-astro-cid-jbsoqdrt><div class="nav-indicator absolute -left-6 top-3.75 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A9FF5B] hidden md:block" data-astro-cid-jbsoqdrt></div><span class="md:hidden flex items-center justify-center w-6 h-6" data-astro-cid-jbsoqdrt><fragment data-astro-cid-jbsoqdrt>${unescapeHTML(item.icon)}</fragment></span><span class="hidden md:inline-block" data-astro-cid-jbsoqdrt>${item.label}</span><span class="md:hidden" data-astro-cid-jbsoqdrt>${item.label}</span></a></li>`)}</ul></div></nav></div>${renderScript($$result, "D:/portfolio-next/src/components/nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/portfolio-next/src/components/nav.astro", void 0);
//#endregion
//#region src/React/LetterGlitch.tsx
var LetterGlitch = ({ glitchColors = [
	"#5e4491",
	"#A476FF",
	"#241a38"
], glitchSpeed = 33, centerVignette = false, outerVignette = false, smooth = true }) => {
	const canvasRef = useRef(null);
	const animationRef = useRef(null);
	const letters = useRef([]);
	const grid = useRef({
		columns: 0,
		rows: 0
	});
	const context = useRef(null);
	const lastGlitchTime = useRef(Date.now());
	const fontSize = 16;
	const charWidth = 10;
	const charHeight = 20;
	const lettersAndSymbols = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"!",
		"@",
		"#",
		"$",
		"&",
		"*",
		"(",
		")",
		"-",
		"_",
		"+",
		"=",
		"/",
		"[",
		"]",
		"{",
		"}",
		";",
		":",
		"<",
		">",
		",",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9"
	];
	const getRandomChar = () => {
		return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
	};
	const getRandomColor = () => {
		return glitchColors[Math.floor(Math.random() * glitchColors.length)];
	};
	const hexToRgb = (hex) => {
		hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
			return r + r + g + g + b + b;
		});
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	};
	const interpolateColor = (start, end, factor) => {
		const result = {
			r: Math.round(start.r + (end.r - start.r) * factor),
			g: Math.round(start.g + (end.g - start.g) * factor),
			b: Math.round(start.b + (end.b - start.b) * factor)
		};
		return `rgb(${result.r}, ${result.g}, ${result.b})`;
	};
	const calculateGrid = (width, height) => {
		return {
			columns: Math.ceil(width / charWidth),
			rows: Math.ceil(height / charHeight)
		};
	};
	const initializeLetters = (columns, rows) => {
		grid.current = {
			columns,
			rows
		};
		const totalLetters = columns * rows;
		letters.current = Array.from({ length: totalLetters }, () => ({
			char: getRandomChar(),
			color: getRandomColor(),
			targetColor: getRandomColor(),
			colorProgress: 1
		}));
	};
	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const parent = canvas.parentElement;
		if (!parent) return;
		const dpr = window.devicePixelRatio || 1;
		const rect = parent.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		canvas.style.width = `${rect.width}px`;
		canvas.style.height = `${rect.height}px`;
		if (context.current) context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
		const { columns, rows } = calculateGrid(rect.width, rect.height);
		initializeLetters(columns, rows);
		drawLetters();
	};
	const drawLetters = () => {
		if (!context.current || letters.current.length === 0) return;
		const ctx = context.current;
		const { width, height } = canvasRef.current.getBoundingClientRect();
		ctx.clearRect(0, 0, width, height);
		ctx.font = `${fontSize}px monospace`;
		ctx.textBaseline = "top";
		letters.current.forEach((letter, index) => {
			const x = index % grid.current.columns * charWidth;
			const y = Math.floor(index / grid.current.columns) * charHeight;
			ctx.fillStyle = letter.color;
			ctx.fillText(letter.char, x, y);
		});
	};
	const updateLetters = () => {
		if (!letters.current || letters.current.length === 0) return;
		const updateCount = Math.max(1, Math.floor(letters.current.length * .05));
		for (let i = 0; i < updateCount; i++) {
			const index = Math.floor(Math.random() * letters.current.length);
			if (!letters.current[index]) continue;
			letters.current[index].char = getRandomChar();
			letters.current[index].targetColor = getRandomColor();
			if (!smooth) {
				letters.current[index].color = letters.current[index].targetColor;
				letters.current[index].colorProgress = 1;
			} else letters.current[index].colorProgress = 0;
		}
	};
	const handleSmoothTransitions = () => {
		let needsRedraw = false;
		letters.current.forEach((letter) => {
			if (letter.colorProgress < 1) {
				letter.colorProgress += .05;
				if (letter.colorProgress > 1) letter.colorProgress = 1;
				const startRgb = hexToRgb(letter.color);
				const endRgb = hexToRgb(letter.targetColor);
				if (startRgb && endRgb) {
					letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
					needsRedraw = true;
				}
			}
		});
		if (needsRedraw) drawLetters();
	};
	const animate = () => {
		const now = Date.now();
		if (now - lastGlitchTime.current >= glitchSpeed) {
			updateLetters();
			drawLetters();
			lastGlitchTime.current = now;
		}
		if (smooth) handleSmoothTransitions();
		animationRef.current = requestAnimationFrame(animate);
	};
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		context.current = canvas.getContext("2d");
		resizeCanvas();
		animate();
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				cancelAnimationFrame(animationRef.current);
				resizeCanvas();
				animate();
			}, 100);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener("resize", handleResize);
		};
	}, [glitchSpeed, smooth]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full h-full bg-[#101010] overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("canvas", {
				ref: canvasRef,
				className: "block w-full h-full"
			}),
			outerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(16,16,16,0)_60%,_rgba(16,16,16,1)_100%)]" }),
			centerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]" })
		]
	});
};
//#endregion
//#region src/components/logoWall.astro
var $$LogoWall = createComponent(($$result, $$props, $$slots) => {
	const technologies = [
		"mongodb",
		"react",
		"typeScript",
		"tailwindcss",
		"next",
		"nodejs",
		"HTML5",
		"CSS3",
		"javaScript",
		"git",
		"supabase",
		"mysql",
		"bash",
		"astro"
	];
	const displayNames = {
		mongodb: "MongoDB",
		react: "React",
		typeScript: "TypeScript",
		tailwindcss: "Tailwind CSS",
		next: "Next.js",
		nodejs: "Node.js",
		HTML5: "HTML5",
		CSS3: "CSS3",
		javaScript: "JavaScript",
		git: "Git",
		supabase: "Supabase",
		mysql: "MySQL",
		bash: "Bash",
		astro: "Astro"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative overflow-x-hidden py-8"><div class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div><div class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div><div class="flex animate-scroll w-max will-change-transform">${[...technologies, ...technologies].map((tech, index) => renderTemplate`<div class="flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300"${addAttribute(index >= technologies.length ? "true" : "false", "aria-hidden")}><img${addAttribute(`/svg/${tech}.svg`, "src")}${addAttribute(tech, "alt")} class="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60" width="30" height="30"${addAttribute(index < technologies.length ? "eager" : "lazy", "loading")} decoding="async"><span class="text-lg font-medium text-[var(--white-icon)] whitespace-nowrap">${displayNames[tech]}</span></div>`)}</div></div>`;
}, "D:/portfolio-next/src/components/logoWall.astro", void 0);
//#endregion
//#region src/React/SkillsList.tsx
var CategoryIcons = {
	"Web Development": /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "w-6 h-6 text-[var(--sec)] opacity-70",
		children: /* @__PURE__ */ jsx("path", { d: "M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" })
	}),
	"Mobile Development": /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "w-6 h-6 text-[var(--sec)] opacity-70",
		children: /* @__PURE__ */ jsx("path", { d: "M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z" })
	}),
	"UI/UX Design & Prototyping": /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "w-6 h-6 text-[var(--sec)] opacity-70",
		children: /* @__PURE__ */ jsx("path", { d: "M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z" })
	})
};
var skills = {
	"Web Development": [
		"Single Page Applications (SPAs)",
		"Landing pages and business websites",
		"Portfolio websites"
	],
	"Mobile Development": ["Mobile-friendly web apps", "PWA Development"],
	"UI/UX Design & Prototyping": [
		"UI design with Figma & Canva",
		"UX research & improvements",
		"Prototyping for websites & mobile apps"
	]
};
function SkillsList() {
	const [openItem, setOpenItem] = useState(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "text-left pt-3 md:pt-9",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6",
			children: "What I do?"
		}), /* @__PURE__ */ jsx("ul", {
			className: "space-y-4 mt-4 text-lg",
			children: Object.entries(skills).map(([category, items]) => /* @__PURE__ */ jsx("li", {
				className: "w-full",
				children: /* @__PURE__ */ jsxs("div", {
					onClick: () => setOpenItem(openItem === category ? null : category),
					className: "md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden hover:bg-[var(--white-icon-tr)]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 p-4",
						children: [CategoryIcons[category], /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 grow justify-between",
							children: [/* @__PURE__ */ jsx("div", {
								className: "min-w-0 max-w-[200px] md:max-w-none overflow-hidden",
								children: /* @__PURE__ */ jsx("span", {
									className: "block truncate text-[var(--white)] text-lg",
									children: category
								})
							}), /* @__PURE__ */ jsx("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: `w-6 h-6 text-[var(--white)] transform transition-transform shrink-0 ${openItem === category ? "rotate-180" : ""}`,
								children: /* @__PURE__ */ jsx("path", { d: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" })
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `transition-all duration-300 px-4 ${openItem === category ? "max-h-[125px] pb-4 opacity-100" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ jsx("ul", {
							className: "space-y-2 text-[var(--white-icon)] text-sm",
							children: items.map((item, i) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ jsx("span", {
									className: "pl-1",
									children: "-"
								}), /* @__PURE__ */ jsx("li", {
									className: "pl-3",
									children: item
								})]
							}, i))
						})
					})]
				})
			}, category))
		})]
	});
}
//#endregion
//#region src/components/home.astro
var $$Home = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="text-[var(--white)] mt-12 md:mt-0" id="home"><div class="max-w-5xl mx-auto space-y-8 md:py-36 pb-14"><div class="text-left space-y-4"><p class="text-base md:text-lg text-[var(--white-icon)] shiny-white">Hi, I&apos;m Naveed Ahmed</p><div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4"><h1 class="text-[var(--white)] text-5xl md:text-6xl font-medium text-pretty leading-none">Full-Stack <br> Developer</h1><p class="text-base md:text-2xl text-[var(--white-icon)]">Building full-stack web applications with${" "}<span class="text-[var(--sec)] shiny-sec">MERN Stack</span> from seamless React interfaces to scalable Node.js backends.</p></div><div class="flex justify-start items-center gap-2 pt-3 md:pt-6"><a target="_blank" href="https://github.com/Naveed17" aria-label="GitHub" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></a><a target="_blank" href="https://www.linkedin.com/in/naveedahmed-webdev-js/" aria-label="LinkedIn" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg></a><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=linktonavid@gmail.com&su=Hey%20Naveed!" aria-label="Email" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"><svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path></svg></a></div></div>${renderComponent($$result, "LogoWall", $$LogoWall, {})}<div class="flex flex-col lg:flex-row items-center gap-8">${renderComponent($$result, "SkillsList", SkillsList, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "D:/portfolio-next/src/React/SkillsList.tsx",
		"client:component-export": "default"
	})}<div class="flex justify-center md:w-full md:h-[292px] size-[290px] pt-3 md:pt-9 md:ml-16">${renderComponent($$result, "LetterGlitch", LetterGlitch, {
		"client:load": true,
		"glitchColors": [
			"#5e4491",
			"#A476FF",
			"#241a38"
		],
		"glitchSpeed": 33,
		"centerVignette": false,
		"outerVignette": true,
		"smooth": true,
		"client:component-hydration": "load",
		"client:component-path": "D:/portfolio-next/src/React/LetterGlitch.tsx",
		"client:component-export": "default"
	})}</div></div></div></section>`;
}, "D:/portfolio-next/src/components/home.astro", void 0);
//#endregion
//#region src/components/projects.astro
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="projects" class="py-12 border-t border-[#ffffff10] text-[var(--white)]"><div class="max-w-5xl mx-auto"><h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">My work</h2><h3 class="text-4xl md:text-5xl font-medium mb-8">Projects</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8">${[
		{
			title: "Soghats.pk",
			image: "/soghats.png",
			link: "https://github.com/Naveed17/soghat-nextjs-pro",
			preview: "https://soghats.pk/",
			status: "Deployed"
		},
		{
			title: "Playnox",
			image: "/playnox.png",
			link: "https://github.com/Naveed17/vbrae-admin",
			preview: "https://playnox.online/",
			status: "Contributor"
		},
		{
			title: "Baires",
			image: "/svgl.png",
			link: "https://github.com/Naveed17/bairesDev",
			preview: "https://baires-dev-nu.vercel.app/",
			status: "Deployed"
		},
		{
			title: "Next Shop",
			image: "/ns.png",
			link: "https://github.com/Naveed17/next_shopping_cart_pro",
			preview: "https://next-shopping-cart-pro.vercel.app/",
			status: "Deployed"
		}
	].map((project) => renderTemplate`<div class="group"><a${addAttribute(project.preview, "href")} target="_blank" rel="noopener noreferrer" class="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 border-2 p-2 border-sec">${renderComponent($$result, "Image", $$Image, {
		"src": project.image,
		"alt": project.title,
		"width": 800,
		"height": 600,
		"class": "w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
	})}</a><div class="flex items-center px-3"><div class="flex-grow"><h4 class="text-2xl font-semibold">${project.title}</h4><span class="py-1 text-sm text-[var(--white-icon)]">${project.status}</span></div><div class="flex gap-2 ml-auto"><a target="_blank"${addAttribute(project.link, "href")} aria-label="GitHub" class="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg></a><a target="_blank"${addAttribute(project.preview, "href")} aria-label="Preview" class="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a></div></div></div>`)}</div><a target="_blank" href="https://github.com/Naveed17?tab=repositories" aria-label="GitHub" class="w-full flex items-center justify-center gap-2 mt-9 text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-full bg-[#1414149c] hover:bg-[var(--white-icon-tr)] hover:scale-105"><span class="md:text-lg text-base">More projects on</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></a></div></section>`;
}, "D:/portfolio-next/src/components/projects.astro", void 0);
//#endregion
//#region src/React/Contact.tsx
function Contact() {
	const [state, handleSubmit] = useForm("xlgyywkz");
	const [showAlert, setShowAlert] = useState(true);
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "w-full py-12 border-t border-gray-50/10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-lg text-(--sec) mb-2 shiny-sec",
					children: "Let's talk"
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-4xl md:text-5xl font-medium text-(--white) mb-6",
					children: "Contact"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-(--white-icon)",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-4",
							children: "Have a question or a project in mind? Feel free to reach out."
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", { children: "Location:" }), /* @__PURE__ */ jsx("span", {
								className: "text-(--white)",
								children: "Sargodha, Pakistan"
							})]
						})]
					}), /* @__PURE__ */ jsx("div", { children: state.succeeded && showAlert ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3 p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400",
						children: [
							/* @__PURE__ */ jsx("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: "size-5 mt-0.5 shrink-0",
								children: /* @__PURE__ */ jsx("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium text-sm",
									children: "Message sent successfully!"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs opacity-75 mt-0.5",
									children: "Thanks for reaching out. I'll get back to you soon."
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setShowAlert(false),
								className: "opacity-60 hover:opacity-100 transition-opacity cursor-pointer",
								children: /* @__PURE__ */ jsx("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "size-4",
									children: /* @__PURE__ */ jsx("path", { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" })
								})
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "text",
								name: "name",
								placeholder: "Name",
								required: true,
								className: "px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) placeholder:text-(--white-icon)"
							}),
							/* @__PURE__ */ jsx("input", {
								type: "email",
								name: "email",
								placeholder: "Email",
								required: true,
								className: "px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) placeholder:text-(--white-icon)"
							}),
							/* @__PURE__ */ jsx(ValidationError, {
								prefix: "Email",
								field: "email",
								errors: state.errors,
								className: "text-red-500 text-sm"
							}),
							/* @__PURE__ */ jsx("textarea", {
								name: "message",
								placeholder: "Message",
								rows: 6,
								required: true,
								className: "px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) resize-none placeholder:text-(--white-icon)"
							}),
							/* @__PURE__ */ jsx(ValidationError, {
								prefix: "Message",
								field: "message",
								errors: state.errors,
								className: "text-red-500 text-sm"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: state.submitting,
								className: "px-4 py-2 bg-surface text-(--white) rounded-lg opacity-60 transition-opacity border border-(--white-icon-tr) hover:opacity-100 disabled:cursor-not-allowed",
								children: state.submitting ? "Sending..." : "Submit"
							})
						]
					}) })]
				})
			]
		})
	});
}
var db = getFirestore(initializeApp({
	apiKey: void 0,
	authDomain: "user-counter-26b3b.firebaseapp.com",
	projectId: "user-counter-26b3b",
	storageBucket: "user-counter-26b3b.firebasestorage.app",
	messagingSenderId: "874129611813",
	appId: "1:874129611813:web:03d680c98fba3cfc0a33cc"
}));
//#endregion
//#region src/React/LikeButton.tsx
var LikeButton = () => {
	const [likes, setLikes] = useState(null);
	const [isLiked, setIsLiked] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	useEffect(() => {
		const storedIsLiked = localStorage.getItem("websiteIsLiked");
		if (storedIsLiked) setIsLiked(storedIsLiked === "true");
		const likeDocRef = doc(db, "likes", "counter");
		const loadLikes = async () => {
			try {
				const snapshot = await getDoc(likeDocRef);
				if (snapshot.exists()) {
					const data = snapshot.data();
					const nextLikes = Number(data.likes ?? data.count ?? 0);
					setLikes(Number.isFinite(nextLikes) ? nextLikes : 0);
				} else {
					console.warn("LikeButton: Firestore doc likes/counter does not exist.");
					setLikes(0);
				}
			} catch (error) {
				console.error("LikeButton: failed to load initial likes", error);
				setLikes(0);
			}
		};
		loadLikes();
		const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				const nextLikes = Number(data.likes ?? data.count ?? 0);
				setLikes(Number.isFinite(nextLikes) ? nextLikes : 0);
			} else setLikes(0);
		}, (error) => {
			console.error("LikeButton: Firestore realtime listener failed", error);
		});
		return () => unsubscribe();
	}, []);
	const handleLike = async () => {
		if (isProcessing || isLiked) return;
		const previousLikes = likes ?? 0;
		setLikes((prev) => (prev ?? 0) + 1);
		setIsLiked(true);
		setIsAnimating(true);
		localStorage.setItem("websiteIsLiked", "true");
		setTimeout(() => setIsAnimating(false), 600);
		try {
			setIsProcessing(true);
			await updateDoc(doc(db, "likes", "counter"), { likes: increment(1) });
		} catch (error) {
			console.error("Error updating likes:", error);
			setLikes(previousLikes);
			setIsLiked(false);
			localStorage.removeItem("websiteIsLiked");
		} finally {
			setIsProcessing(false);
		}
	};
	const borderColorClass = isLiked ? "border-[var(--sec)]" : "border-[var(--white-icon)]";
	const displayLikes = likes ?? 0;
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ jsxs("button", {
			onClick: handleLike,
			disabled: isProcessing || isLiked,
			className: `
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${borderColorClass}
          ${!isLiked ? "hover:scale-105 hover:border-[var(--white)]" : "cursor-default"}
          ${isAnimating ? "animate-heart-pulse" : ""}
        `,
			children: [/* @__PURE__ */ jsx("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				className: `w-6 h-6 transition-all duration-300 ease-in-out 
            ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
          `,
				children: /* @__PURE__ */ jsx("path", { d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" })
			}), /* @__PURE__ */ jsxs("span", {
				className: "text-sm pl-3 font-medium text-[var(--white)]",
				children: [displayLikes, " Likes"]
			})]
		})
	});
};
//#endregion
//#region src/components/footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="w-full py-12 border-t border-[#ffffff10]"><div class="max-w-5xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10"><div class="flex flex-col lg:items-start items-center space-y-6 gap-9"><div class="flex space-x-6 sm:space-x-8">${[
		{
			href: "https://github.com/Naveed17",
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-8\"><path d=\"M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z\"></path></svg>",
			label: "GitHub"
		},
		{
			href: "https://www.linkedin.com/in/naveedahmed-webdev-js/",
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"size-8\"><path d=\"M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z\"></path></svg>",
			label: "LinkedIn"
		},
		{
			href: "https://mail.google.com/mail/?view=cm&fs=1&to=linktonavid@gmail.com&su=Hey%20Naveed!",
			icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"2.1em\" height=\"2.1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64\"></path></svg>",
			label: "Email"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" class="flex flex-col items-center group"${addAttribute(link.label, "aria-label")}><div class="text-(--white-icon) hover:text-(--white) transition duration-300 ease-in-out"><div>${unescapeHTML(link.icon)}</div></div></a>`)}</div>${renderComponent($$result, "LikeButton", LikeButton, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "D:/portfolio-next/src/React/LikeButton.tsx",
		"client:component-export": "default"
	})}</div><div class="flex items-center justify-center gap-3 py-6"><span class="text-sm text-gray-400">Made with</span>${[
		{
			icon: "/svg/astro.svg",
			alt: "Astro Logo"
		},
		{
			icon: "/svg/tailwindcss.svg",
			alt: "TailwindCSS Logo"
		},
		{
			icon: "/svg/vercel.svg",
			alt: "Vercel Logo"
		}
	].map((tech) => renderTemplate`<img${addAttribute(tech.icon, "src")}${addAttribute(tech.alt, "alt")} class="h-5 w-5 object-contain filter brightness-0 invert opacity-50" loading="lazy">`)}</div><div class="flex flex-col items-center lg:items-start space-y-6"><div class="w-full max-w-xs"><iframe style="border-radius:12px; border:0;" src="https://open.spotify.com/embed/playlist/2irOd49FRRLFWYccolQeea?utm_source=generator&theme=0&locale=en_US" class="w-full h-40" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div></div></div><div class="mt-12 pt-8 border-t border-[#ffffff10]"><p class="text-center text-sm text-(--white-icon) space-y-2"><span class="block sm:inline">Copyright (c) ${currentYear}${" "}<a href="https://github.com/Naveed17">Naveed Ahmed</a>. All rights reserved.</span></p></div></div></footer>`;
}, "D:/portfolio-next/src/components/footer.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Naveed Ahmed | Full-Stack Developer" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Nav", $$Nav, {})}${renderComponent($$result, "Home", $$Home, {})}${renderComponent($$result, "Projects", $$Projects, {})}${renderComponent($$result, "Contact", Contact, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/React/Contact",
		"client:component-export": "default"
	})}${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "D:/portfolio-next/src/pages/index.astro", void 0);
var $$file = "D:/portfolio-next/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page, __exportAll as t };
