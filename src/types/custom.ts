import React from 'react';

export type InputHandler = React.ChangeEventHandler<HTMLInputElement>;
export type InputType = React.ChangeEvent<HTMLInputElement>;
export type ClickHandler = React.MouseEventHandler<HTMLInputElement>;
export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>;
export type FormHandler = React.FormEventHandler<HTMLFormElement>;
export type BooleanSetStateType = React.Dispatch<React.SetStateAction<boolean>>;
export type TextAreaHandler = React.ChangeEventHandler<HTMLTextAreaElement>;
