import React from "react";
import { Container } from "../../../components/common/Container";
import { Button } from "../../../components/ui/Button";
import { Reveal } from "../../../components/common/Reveal";
import { WELCOME_DATA } from "../../../data/home.data";



export const WelcomeSection: React.FC = () => {
	return (
		<section
			aria-labelledby="welcome-heading"
			className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-primary)]"
		>
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Left Column: Portrait Image with Signature Top-Right Curve & Overlapping Gold Circle Badge */}
					<Reveal className="lg:col-span-5">
						<div className="relative mx-auto max-w-md lg:max-w-none">
							<div className="overflow-hidden rounded-signature-lg shadow-[var(--shadow-card)] bg-[var(--color-bg-secondary)] aspect-[4/5]">
								<img
									src={WELCOME_DATA.imageUrl}
									alt={WELCOME_DATA.imageAlt}
									loading="lazy"
									className="w-full h-full object-cover object-center"
								/>
							</div>

							{/* Circular Warm Gold Badge anchored at bottom-right matching s2.jpg */}
							<div
								className="absolute -bottom-6 right-2 sm:-right-6 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[var(--color-brand-gold)] text-[#0A2540] shadow-lg flex flex-col justify-center px-6 sm:px-7 select-none"
								aria-label={`${WELCOME_DATA.badgeNumber} ${WELCOME_DATA.badgeText}`}
							>
								<span className="font-heading text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">
									{WELCOME_DATA.badgeNumber}
								</span>
								<span className="text-[11.5px] sm:text-xs font-bold leading-snug mt-1.5 text-[#0A2540]/90">
									{WELCOME_DATA.badgeText}
								</span>
							</div>
						</div>
					</Reveal>

					{/* Right Column: Institutional Welcome Copy */}
					<Reveal
						delay={0.1}
						className="lg:col-span-7 lg:pl-4 space-y-6 pt-4 lg:pt-0"
					>
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
							{WELCOME_DATA.eyebrow}
						</p>

						<h2
							id="welcome-heading"
							className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[var(--color-text-primary)] leading-[1.12] tracking-tight"
						>
							{WELCOME_DATA.title}
						</h2>

						<p className="text-base sm:text-[18px] text-[var(--color-text-secondary)] leading-[1.7] font-normal">
							{WELCOME_DATA.leadParagraph}
						</p>

						<p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-[1.7]">
							{WELCOME_DATA.secondParagraph}
						</p>

						<div className="pt-2">
							<Button
								to={WELCOME_DATA.ctaHref}
								variant="link"
								withArrow
								className="text-[15px]"
							>
								{WELCOME_DATA.ctaLabel}
							</Button>
						</div>
					</Reveal>
				</div>
			</Container>
		</section>
	);
};
