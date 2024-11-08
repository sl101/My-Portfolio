import {Logo, Navigation, LangBox, WhatsAppContact } from "..";

export const Header = () =>{

	return (
		<header className="py-5 font-['Roboto-regular'] sticky z-50 top-0 w-full z-90 bg-original-tean">
		{/*<header className="py-5 font-['Roboto-regular'] sticky z-50 top-0 w-full z-90 bg-original-tean">*/}
			<div className="container">
				<div className="flex-between-center gap-12">
					<Logo />
					<Navigation />
					<div className="flex-between-center gap-12">
						<LangBox />
						<WhatsAppContact />
					</div>
				</div>
			</div>
		</header>
	);
}
