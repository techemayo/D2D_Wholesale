import React from "react";
import { useTranslation } from "next-i18next";
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelKey?: string;
	label?: string | any;
}
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
	({ labelKey, label, ...rest }, ref) => {
		const { t } = useTranslation();
		return (
			<label className="group flex items-center text-heading text-sm cursor-pointer">
				<input
					type="checkbox"
					className="form-checkbox w-5 h-5 bg-gray-700 border-gray-700 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0  focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-orange-500 checked:hover:bg-pink-500 checked:focus:bg-pink-500"
					ref={ref}
					{...rest}
				/>
				<span className="ms-4 -mt-0.5">{labelKey ? t(labelKey) : label}</span>
			</label>
		);
	}
);
