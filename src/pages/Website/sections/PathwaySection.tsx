import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "../../../components/common/Container";
import { SectionHeading } from "../../../components/common/SectionHeading";
import { Reveal } from "../../../components/common/Reveal";
import { PATHWAYS_DATA } from "../../../data/home.data";
import { cn } from "../../../utils/cn";


export const PathwaysSection: React.FC = () => {
	return (
		<section
			aria-labelledby="pathways-heading"
			className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-primary)]"
		>
			<Container className="space-y-14 lg:space-y-16">
				{/* Centered Header */}
				<Reveal>
					<SectionHeading
						align="center"
						eyebrow={PATHWAYS_DATA.eyebrow}
						title={<span id="pathways-heading">{PATHWAYS_DATA.title}</span>}
					/>
				</Reveal>

				{/* 3-Column Staggered Stage Grid matching s4.jpg */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
					{PATHWAYS_DATA.stages.map((stage, index) => (
						<Reveal
							key={stage.id}
							delay={index * 0.1}
							className={cn(
								"group space-y-5",
								// Middle column staggered downward on desktop matching s4.jpg
								stage.staggered && "md:mt-12",
							)}
						>
							{/* Image with Signature Top-Right Curve */}
							<Link
								to={stage.href}
								className="block overflow-hidden rounded-signature bg-[var(--color-bg-secondary)] aspect-[4/3.6] shadow-xs"
							>
								<img
									src={stage.imageUrl}
									alt={stage.imageAlt}
									loading="lazy"
									className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
								/>
							</Link>

							{/* Stage Metadata & Description */}
							<div className="space-y-2.5 pt-1">
								<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-eyebrow)]">
									{stage.ageRange}
								</p>

								<h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
									<Link
										to={stage.href}
										className="hover:text-[var(--color-brand-primary)] transition-colors"
									>
										{stage.title}
									</Link>
								</h3>

								<p className="text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-[1.65]">
									{stage.description}
								</p>

								<div className="pt-1">
									<Link
										to={stage.href}
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-eyebrow)] hover:opacity-80 transition-opacity"
									>
										<span>Explore {stage.title}</span>
										<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
									</Link>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
};
