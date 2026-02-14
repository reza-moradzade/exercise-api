import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { Hono } from 'hono';
export const Home = new Hono();
export const Meteors = ({ number }) => {
    return (_jsx(_Fragment, { children: Array.from({ length: number || 30 }, (_, idx) => (_jsx("span", { class: "meteor animate-[meteorAnimation_3s_linear_infinite] absolute h-1 w-1 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]", style: {
                top: 0,
                left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
                animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
                animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`
            } }, idx))) }));
};
Home.get('/', (c) => {
    const title = 'ExerciseDB API';
    const description = 'Access detailed data on over 1300+ exercises with the ExerciseDB API. This API offers extensive information on each exercise, including target body parts, equipment needed, GIFs for visual guidance, and step-by-step instructions.';
    const keywords = 'exercisedb api, fitness exercise database api, fitness API, exercise database, workout API, fitness data API, muscle exercises, exercise gif api, gym API, exercise videos, exercise images, exercise instructions, gym workouts api ,  workouts exercises, home workouts, muscle gain workouts, weight loss exercises';
    return c.html(_jsxs("html", { children: [_jsxs("head", { children: [_jsx("title", { children: "ExerciseDB API" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("meta", { charset: "utf-8" }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: "ExerciseDB" }), _jsx("meta", { name: "author", content: "Ascend API" }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image", content: "https://cdn.exercisedb.dev/exercisedb/exercisedb_banner.png" }), _jsx("meta", { property: "og:url", content: "https://github.com/exercisedb/exercisedb-api" }), _jsx("meta", { property: "twitter:card", content: "summary_large_image" }), _jsx("meta", { property: "twitter:title", content: title }), _jsx("meta", { property: "twitter:description", content: description }), _jsx("meta", { property: "twitter:image", content: "https://cdn.exercisedb.dev/exercisedb/exercisedb_banner.png" }), _jsx("link", { rel: "icon", href: "https://cdn.exercisedb.dev/exercisedb/android-chrome-512x512.png" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap", rel: "stylesheet" }), _jsx("script", { src: "https://cdn.tailwindcss.com" }), _jsx("script", { defer: true, src: "https://cloud.umami.is/script.js", "data-website-id": "83e304bf-ca81-4b79-a14c-73dcb6e5d035" }), _jsx("style", { dangerouslySetInnerHTML: {
                            __html: `
            * { font-family: 'Inter', sans-serif; } 
            @keyframes borderAnimation {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes meteorAnimation {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
            .meteor::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 50px;
              height: 1px;
              background: linear-gradient(90deg, #64748b, transparent);
            }
            .animate-meteor-effect {
              animation-name: meteorAnimation;
            }`
                        } })] }), ' ', _jsx("body", { class: "bg-black mx-auto md:min-h-screen max-w-screen-lg flex flex-col", children: _jsxs("main", { class: "mx-auto my-auto flex flex-col space-y-8 px-4 pb-8 md:py-10 relative overflow-y-hidden overflow-x-hidden", children: [_jsx(Meteors, { number: 15 }), _jsx("div", { class: "flex flex-row items-center space-x-4 ml-6", children: _jsx("p", { class: "text-2xl md:text-4xl text-transparent font-bold leading-none bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-100", children: "ExerciseDB API" }) }), _jsxs("div", { class: "grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2 sm:gap-0 relative grid-flow-row", children: [_jsx("a", { target: "_blank", class: "p-4 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4", href: "/docs", children: _jsxs("div", { class: "flex flex-col", children: [_jsx("span", { class: "text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-red-500 text-red-500", children: "Get Started" }), _jsx("span", { class: "text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2", children: "Explore the Docs" }), _jsx("div", { class: "text-neutral-500 mt-2", children: "Check out the documentation to learn how to use the ExerciseDB API." })] }) }), _jsx("a", { target: "_blank", class: "p-4 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4", href: "https://github.com/exercisedb/exercisedb-api", children: _jsxs("div", { class: "flex flex-col", children: [_jsx("span", { class: "text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-green-500 text-green-500", children: "Open Source" }), _jsx("span", { class: "text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2", children: "Open Source" }), _jsx("div", { class: "text-neutral-500 mt-2", children: "ExerciseDB API is open-source. Check out the source code on github." })] }) }), _jsx("a", { target: "_blank", class: "p-4 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4", href: "https://github.com/exercisedb/exercisedb-api/issues", children: _jsxs("div", { class: "flex flex-col", children: [_jsx("span", { class: "text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-violet-500 text-violet-500", children: "Contribute" }), _jsx("span", { class: "text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2", children: "Get Involved" }), _jsx("div", { class: "text-neutral-500 mt-2", children: "Encounter a bug or have a feature suggestion? Report it on GitHub or contribute by submitting a pull request." })] }) }), _jsx("div", { class: "p-4 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4", children: _jsxs("div", { class: "flex flex-col", children: [_jsx("span", { class: "text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-blue-500 text-blue-500", children: "Contact" }), _jsx("span", { class: "text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2", children: "ExerciseDB API" }), _jsxs("div", { class: "text-neutral-500 mt-2", children: ["Have a question or need help? Reach out on", ' ', _jsx("a", { href: "mailto:hello@exercisedb.dev", target: "_blank", rel: "noopener noreferrer", className: "hover:underline text-indigo-500", children: "hello@exercisedb.dev" }), ",", ' ', _jsx("a", { href: "https://t.me/exercisedb", target: "_blank", rel: "noopener noreferrer", className: "hover:underline text-green-500", children: "Chat With Us." })] })] }) })] })] }) })] }));
});
