import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, Menu, PhoneCall, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MAIN_NAVIGATION } from '../../data/navigation.data';
import { SITE_CONFIG } from '../../config/site.config';
import { ROUTES } from '../../routes/paths';
import { cn } from '../../utils/cn';


export const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
	const navRef = useRef<HTMLElement>(null);
	const location = useLocation();

	// Close menus on route or hash change
	useEffect(() => {
		setOpenDropdown(null);
		setMobileMenuOpen(false);
	}, [location.pathname, location.hash]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Lock body scroll when mobile drawer is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileMenuOpen]);

	const toggleMobileAccordion = (label: string) => {
		setMobileAccordion((prev) => (prev === label ? null : label));
	};

	return (
		<header
			ref={navRef}
			className="sticky top-0 z-50 bg-[var(--color-bg-elevated)]/95 backdrop-blur-md border-b border-[var(--color-border-subtle)] shadow-[var(--shadow-navbar)] transition-colors duration-200"
		>
			<Container className="h-20 flex items-center justify-between gap-4">
				{/* Left: Institutional Logo */}
				<Logo />

				{/* Center: Desktop Navigation Links & Dropdowns */}
				<nav
					className="hidden lg:flex items-center gap-1 xl:gap-2"
					aria-label="Main Navigation"
				>
					{MAIN_NAVIGATION.map((item) => {
						const hasChildren = Boolean(item.children && item.children.length > 0);
						const isOpen = openDropdown === item.label;
						const isActive =
							item.href === ROUTES.HOME
								? location.pathname === ROUTES.HOME
								: location.pathname.startsWith(item.href);

						return (
							<div
								key={item.label}
								className="relative"
								onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
								onMouseLeave={() => hasChildren && setOpenDropdown(null)}
							>
								<div className="flex items-center">
									<NavLink
										to={item.href}
										className={cn(
											'px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-colors inline-flex items-center gap-1.5',
											isActive
												? 'text-[var(--color-brand-primary)]'
												: 'text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]'
										)}
										onClick={() => setOpenDropdown(null)}
									>
										<span>{item.label}</span>
										{hasChildren && (
											<ChevronDown
												className={cn(
													'w-3.5 h-3.5 text-[var(--color-text-muted)] transition-transform duration-200',
													isOpen && 'rotate-180 text-[var(--color-brand-primary)]'
												)}
											/>
										)}
									</NavLink>
								</div>

								{/* Animated Frosted Dropdown Menu matching screenshot s5.jpg */}
								<AnimatePresence>
									{hasChildren && isOpen && (
										<motion.div
											initial={{ opacity: 0, y: 8 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 6 }}
											transition={{ duration: 0.16, ease: 'easeOut' }}
											className="absolute left-0 top-full pt-2 w-60 z-50"
										>
											<div className="rounded-b-xl rounded-t-sm bg-[var(--color-bg-elevated)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] border-t-2 border-t-[var(--color-brand-gold)] shadow-[var(--shadow-dropdown)] py-2.5 px-2">
												<ul className="space-y-0.5" role="menu">
													{item.children?.map((subItem) => (
														<li key={subItem.href} role="none">
															<Link
																to={subItem.href}
																role="menuitem"
																onClick={() => setOpenDropdown(null)}
																className="block px-3.5 py-2 rounded-lg text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-brand-sky-soft)]/70 transition-colors"
															>
																{subItem.label}
															</Link>
														</li>
													))}
												</ul>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</nav>

				{/* Right: Portal link (with gold bottom bar), Apply Now button, and Theme Toggle */}
				<div className="hidden lg:flex items-center gap-4">
					<ThemeToggle />

					<a
						href={SITE_CONFIG.links.portal}
						className="relative py-1 text-[13.5px] font-bold text-[var(--color-brand-primary)] hover:opacity-85 transition-opacity"
					>
						Portal
						<span
							className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--color-brand-gold)] rounded-full"
							aria-hidden="true"
						/>
					</a>

					<Button
						to={`${ROUTES.ADMISSIONS}#application-form`}
						variant="primary"
						size="md"
						className="px-5 py-2.5 text-[13.5px] rounded-lg shadow-xs"
					>
						Apply now
					</Button>
				</div>

				{/* Mobile Menu Trigger & Theme Toggle */}
				<div className="flex lg:hidden items-center gap-2">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						className="p-2.5 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sky)]"
						aria-expanded={mobileMenuOpen}
						aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					>
						{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</Container>

			{/* Mobile Navigation Slide-Down / Drawer */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.22, ease: 'easeInOut' }}
						className="lg:hidden border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] overflow-y-auto max-h-[calc(100vh-5rem)]"
					>
						<Container className="py-5 space-y-5">
							<nav className="space-y-1" aria-label="Mobile Navigation">
								{MAIN_NAVIGATION.map((item) => {
									const hasChildren = Boolean(item.children && item.children.length > 0);
									const isExpanded = mobileAccordion === item.label;

									return (
										<div
											key={item.label}
											className="border-b border-[var(--color-border-subtle)]/60 last:border-none pb-1"
										>
											<div className="flex items-center justify-between">
												<NavLink
													to={item.href}
													onClick={() => setMobileMenuOpen(false)}
													className={({ isActive }) =>
														cn(
															'flex-1 py-2.5 text-sm font-semibold transition-colors',
															isActive
																? 'text-[var(--color-brand-primary)]'
																: 'text-[var(--color-text-primary)]'
														)
													}
												>
													{item.label}
												</NavLink>

												{hasChildren && (
													<button
														type="button"
														onClick={() => toggleMobileAccordion(item.label)}
														className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
														aria-expanded={isExpanded}
														aria-label={`Toggle ${item.label} submenu`}
													>
														<ChevronDown
															className={cn(
																'w-4 h-4 transition-transform duration-200',
																isExpanded && 'rotate-180 text-[var(--color-brand-primary)]'
															)}
														/>
													</button>
												)}
											</div>

											<AnimatePresence>
												{hasChildren && isExpanded && (
													<motion.ul
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.18 }}
														className="pl-3 pb-2 space-y-1 border-l-2 border-[var(--color-brand-sky)] ml-1 overflow-hidden"
													>
														{item.children?.map((subItem) => (
															<li key={subItem.href}>
																<Link
																	to={subItem.href}
																	onClick={() => setMobileMenuOpen(false)}
																	className="block py-1.5 px-2 rounded-md text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
																>
																	{subItem.label}
																</Link>
															</li>
														))}
													</motion.ul>
												)}
											</AnimatePresence>
										</div>
									);
								})}
							</nav>

							{/* Mobile Action Buttons & Theme Preference */}
							<div className="pt-2 space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
										Appearance
									</span>
									<ThemeToggle showSystem />
								</div>

								<div className="grid grid-cols-2 gap-3">
									<Button
										href={SITE_CONFIG.links.portal}
										variant="outline"
										size="md"
										className="w-full justify-center"
									>
										Portal
									</Button>
									<Button
										to={`${ROUTES.ADMISSIONS}#application-form`}
										variant="primary"
										size="md"
										className="w-full justify-center"
									>
										Apply now
									</Button>
								</div>

								{/* Mobile Contact Strip */}
								<div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-col gap-2 text-xs text-[var(--color-text-secondary)]">
									<a
										href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
										className="inline-flex items-center gap-2 hover:text-[var(--color-brand-primary)]"
									>
										<PhoneCall className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
										<span>{SITE_CONFIG.contact.phone}</span>
									</a>
									<a
										href={`mailto:${SITE_CONFIG.contact.email}`}
										className="inline-flex items-center gap-2 hover:text-[var(--color-brand-primary)]"
									>
										<Mail className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
										<span>{SITE_CONFIG.contact.email}</span>
									</a>
								</div>
							</div>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};