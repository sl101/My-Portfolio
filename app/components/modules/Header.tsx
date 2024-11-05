import {Logo, Navigation, LangBox, WhatsAppContact } from "..";

export const Header = () =>{

	return (
		<header className="py-5 font-['Roboto-regular'] bg-original-tean">
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
