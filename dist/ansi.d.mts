export var code: Readonly<{
    __proto__: any;
    bg: {
        black: number;
        red: number;
        green: number;
        yellow: number;
        blue: number;
        magenta: number;
        cyan: number;
        white: number;
    };
    bgBright: {
        black: number;
        red: number;
        green: number;
        yellow: number;
        blue: number;
        magenta: number;
        cyan: number;
        white: number;
    };
    fg: {
        black: number;
        red: number;
        green: number;
        yellow: number;
        blue: number;
        magenta: number;
        cyan: number;
        white: number;
    };
    fgBright: {
        black: number;
        red: number;
        green: number;
        yellow: number;
        blue: number;
        magenta: number;
        cyan: number;
        white: number;
    };
    reset: 0;
    textStyle: {
        bold: number;
        dim: number;
        italic: number;
        underline: number;
        blink: number;
        rapid: number;
        inverse: number;
        invisible: number;
        strike: number;
    };
}>;
export namespace color {
    function fg256(n: any, text: any): string;
    function bg256(n: any, text: any): string;
    function fgRGB(arr: any, txt: any): string;
    function bgRGB(arr: any, txt: any): string;
}
export var css: {
    0: string;
};
export function find(str: any): {
    escape: string;
    code: string;
    index: number;
}[];
export function html(str: any): string;
export namespace icon {
    let ok: string;
    let notOk: string;
    let notEqual: string;
    let warning: string;
    namespace arrow {
        let left: string;
        let right: string;
        namespace double {
            let left_1: string;
            export { left_1 as left };
            let right_1: string;
            export { right_1 as right };
        }
    }
    namespace bullet {
        let on: string;
        let off: string;
    }
    let dot: string;
    let method: string;
    let summary: string;
    let block: string;
    let love: string;
    let menu: string;
    let mark: string;
    let select: string;
    namespace star {
        let on_1: string;
        export { on_1 as on };
        let off_1: string;
        export { off_1 as off };
    }
    let section: string;
    let para: string;
    namespace radio {
        let on_2: string;
        export { on_2 as on };
        let off_2: string;
        export { off_2 as off };
    }
    let pointer: string;
}
export var regex: RegExp;
export var style: {};
