export const Logo = () => (
	<svg
		width="148"
		height="32"
		viewBox="0 0 148 32"
		fill="currentcolor"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Sanjib Narzary"
	>
		<LogoMark />
		<text
			x="40"
			y="21"
			fontFamily="inherit"
			fontSize="16"
			fontWeight="600"
			letterSpacing="-0.2"
		>
			Sanjib Narzary
		</text>
	</svg>
);

export const LogoIcon = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="currentcolor"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Sanjib Narzary"
	>
		<LogoMark />
	</svg>
);

const LogoMark = () => (
	<>
		<rect width="32" height="32" rx="8" />
		<path
			d="M9 23V9h2.4l9.2 10.3V9H23v14h-2.4L11.4 12.7V23H9Z"
			fill="var(--color-background, #fff)"
		/>
	</>
);
