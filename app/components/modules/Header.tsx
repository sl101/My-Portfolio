import {Logo, Navigation, LangBox } from "..";

export const Header = () =>{
	return (
		<header className="py-5 font-['Roboto-regular'] bg-original-tean">
			<div className="container">
				<div className="flex-between-center gap-6">
					<Logo />
					<div className="flex-between-center gap-12"> 
						<Navigation />
						<LangBox />
					</div>
				</div>
			</div>
		</header>
	);
}
