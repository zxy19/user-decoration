export function makeWarpComponent(VNode: any, str: string, data: any, containerClass: string) {
    return new Proxy(new DecorationWarpComponent(VNode, str, data, containerClass), {
        get(target: any, prop: any) {
            if (target.hasOwnProperty(prop) || prop == 'toString') {
                return target[prop];
            }
            return target.stringRet[prop];
        }
    });
}
export class DecorationWarpComponent {
    states: any;
    attrs: any;
    element: any;
    tag: any;
    children: any;
    stringRet: string;
    data: any;
    constructor(VNode: any, str: string, data: any, containerClass: string) {
        this.stringRet = str;
        this.states = VNode.states;
        this.attrs = VNode.attrs;
        this.element = VNode.element;
        this.tag = VNode.tag;
        this.children = [
            {
                tag: "span",
                attrs: {
                    class: containerClass
                },
                states: undefined,
                children: [{
                    tag: "#",
                    children: str,
                    attrs: {},
                    states: undefined
                }]
            }
        ]
        this.data = data;
    }
    toString() {
        return this.stringRet;
    }
}