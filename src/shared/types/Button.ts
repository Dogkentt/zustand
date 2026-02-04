export interface IButtonProps {
    children: React.ReactNode;
    classNames  ?: string;
    onClick: () => void;
    disabled?: boolean;
}