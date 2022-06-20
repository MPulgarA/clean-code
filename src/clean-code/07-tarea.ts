(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlProps {
        id: string,
        type: HtmlType,
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor({ id, type }: HtmlProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string,
        placeholder: string,
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ value, placeholder }: InputAttributesProps) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }


    class InputEvents {
        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    interface InputProps {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputArguments: InputAttributes;
        public inputEvents: InputEvents;

        constructor({ id, type, value, placeholder }: InputProps) {
            this.htmlElement = new HtmlElement({ id, type });
            this.inputArguments = new InputAttributes({ value, placeholder });
            this.inputEvents = new InputEvents();
        }

    }

    //? Idea para la nueva clase InputElement
    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField = new InputElement({
        id: 'txtName',
        type: 'input',
        value: 'Texto',
        placeholder: 'Enter first name',
    });

    console.log({ nameField });

})()