type FormMessageType = 'required' | 'pattern' | 'min' | 'max';

interface IFormMessage {
    message: string,
    type: FormMessageType,
    ref: any,
}
export default IFormMessage
