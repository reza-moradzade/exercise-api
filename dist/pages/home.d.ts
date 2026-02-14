import { Hono } from 'hono';
export declare const Home: Hono<import("hono/types").BlankEnv, import("hono/types").BlankSchema, "/">;
export declare const Meteors: ({ number }: {
    number: number;
}) => import("hono/jsx/jsx-dev-runtime").JSX.Element;
