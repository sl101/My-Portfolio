"use client"
import { useUnit } from "effector-react"
import { $lang } from "@/app/context/lang"
import translationsJson from "@/app/public/translations/translations.json"


export const useLang = () => {
	const lang = useUnit($lang)
	const translations = translationsJson
	return {lang, translations}
}

