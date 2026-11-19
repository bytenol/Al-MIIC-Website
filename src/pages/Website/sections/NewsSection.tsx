import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { Reveal } from '../../../components/common/Reveal';
import { NEWS_DATA } from '../../../data/home.data';

export const NewsSection: React.FC = () => {
  const featuredArticle =
    NEWS_DATA.articles.find((article) => article.featured) || NEWS_DATA.articles[0];

  const secondaryArticles = NEWS_DATA.articles.filter(
    (article) => article.id !== featuredArticle.id
  );

  return (
    <section
      aria-labelledby="news-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)]"
    >
      <Container className="space-y-10 sm:space-y-12">
        {/* Section Header Row */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
              {NEWS_DATA.eyebrow}
            </p>
            <h2
              id="news-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              {NEWS_DATA.title}
            </h2>
          </div>

          <Link
            to={NEWS_DATA.viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-eyebrow)] hover:opacity-80 transition-opacity group"
          >
            <span>{NEWS_DATA.viewAllLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Asymmetric Grid matching s7.jpg: Featured Left (7 cols) + 2 Horizontal Stacked Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Featured Card */}
          <Reveal className="lg:col-span-7 flex">
            <article className="group flex flex-col w-full rounded-xl overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
              <Link
                to={featuredArticle.href}
                className="block overflow-hidden aspect-[16/9.5] bg-[var(--color-bg-secondary)]"
              >
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em]">
                    <span className="text-[var(--color-text-eyebrow)]">
                      {featuredArticle.category}
                    </span>
                    <span className="text-[var(--color-text-muted)]">&mdash;</span>
                    <span className="text-[var(--color-text-muted)]">
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] leading-snug">
                    <Link
                      to={featuredArticle.href}
                      className="hover:text-[var(--color-brand-primary)] transition-colors"
                    >
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-[1.65]">
                    {featuredArticle.excerpt}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Right Column: Two Stacked Horizontal Cards */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            {secondaryArticles.map((article, index) => (
              <Reveal key={article.id} delay={(index + 1) * 0.1} className="flex-1 flex">
                <article className="group grid grid-cols-1 sm:grid-cols-12 w-full rounded-xl overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                  {/* Left Thumbnail */}
                  <Link
                    to={article.href}
                    className="sm:col-span-5 block overflow-hidden aspect-[16/10] sm:aspect-auto bg-[var(--color-bg-secondary)]"
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Right Details */}
                  <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.12em]">
                        <span className="text-[var(--color-text-eyebrow)]">
                          {article.category}
                        </span>
                        <span className="text-[var(--color-text-muted)]">&mdash;</span>
                        <span className="text-[var(--color-text-muted)]">
                          {article.date}
                        </span>
                      </div>

                      <h3 className="font-heading text-base sm:text-[17px] font-bold text-[var(--color-text-primary)] leading-snug">
                        <Link
                          to={article.href}
                          className="hover:text-[var(--color-brand-primary)] transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-1">
                      <Link
                        to={article.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[var(--color-text-eyebrow)] hover:opacity-80 transition-opacity"
                      >
                        <span>Read story</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};