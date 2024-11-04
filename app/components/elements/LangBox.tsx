"use client"
import { AllowedLangs } from "@/app/constants/lang";
import { setLang } from "@/app/context/lang";
import { useLang } from "@/app/hooks/useLang";

export const LangBox = () => {

	const {lang} = useLang()

	const handleSwitchLang = (lang: string)=>{
		setLang(lang as AllowedLangs);
	}

	const handleSwitchLangToDe = ()=> handleSwitchLang('de')
	const handleSwitchLangToEn = ()=> handleSwitchLang('en')

	return (
		<div className="text-white flex flex-col items-center gap-1">
			<button className={`${lang==="en" && "text-accent-orange"}`}
			onClick={handleSwitchLangToEn}>
				EN
			</button>
			<button className={`${lang==="de" && "text-accent-orange"}`}
			onClick={handleSwitchLangToDe}>
				DE
			</button>
		</div>
	);
}
