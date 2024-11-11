import {Logo, Navigation, LangBox, WhatsAppContact, Burger } from "..";

export const Header = () =>{

	return (
		<header className="py-5 font-['Roboto-regular'] sticky z-50 top-0 w-full bg-original-tean">
			<div className="container">
				<div className="flex-between-center gap-12 ">
					<Logo />
					<Navigation />
					<div className="flex-between-center gap-12">
						<div className="max-[1024px]:hidden">
						<LangBox />
						</div>
						<div className="max-[1024px]:hidden">
						<WhatsAppContact />
						</div>
					</div>
					<div className="hidden max-[1024px]:flex max-[1024px]:items-center max-[1024px]:gap-12 relative z-50">
					<LangBox />
					<Burger/>
					</div>
				</div>
			</div>
		</header>
	);
}
