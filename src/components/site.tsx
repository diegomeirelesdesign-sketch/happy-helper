import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Search, Sun, Ticket, Menu, X, Star, ArrowRight, CircleDot, Instagram, Youtube, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_NAME, SITE_SLOGAN, type Post } from "../lib/content";

export function Logo() {
  return (
    <Link to="/" className="brand" aria-label={SITE_NAME}>
      <span className="brand-hole"><CircleDot size={19} strokeWidth={3} /></span>
      <span>{SITE_NAME}</span>
    </Link>
  );
}

export function Header() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="topline">
        <span>{SITE_SLOGAN}</span>
        <span className="topline-stamp">FEITO POR UM FÃ, NÃO POR UM ALGORITMO</span>
      </div>
      <div className="nav-wrap">
        <Logo />
        <nav className={open ? "main-nav open" : "main-nav"}>
          <Link to="/" activeOptions={{ exact: true }}>Início</Link>
          <Link to="/categoria/$slug" params={{ slug: "Filmes" }}>Filmes</Link>
          <Link to="/categoria/$slug" params={{ slug: "Séries" }}>Séries</Link>
          <Link to="/categoria/$slug" params={{ slug: "Games" }}>Games</Link>
          <Link to="/admin">Painel</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/busca" className="icon-button" aria-label="Buscar"><Search size={19} /></Link>
          <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Alternar tema">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="icon-button menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p>Opiniões sinceras sobre filmes, séries e o caos cultural que nos mantém acordados.</p>
        </div>
        <div>
          <span className="eyebrow">Siga o furo</span>
          <div className="socials"><a href="#" aria-label="Instagram"><Instagram size={18}/></a><a href="#" aria-label="YouTube"><Youtube size={18}/></a><a href="#" aria-label="Newsletter"><Mail size={18}/></a></div>
        </div>
        <div>
          <span className="eyebrow">Nota de rodapé</span>
          <p>Se você discordou, parabéns: o site está funcionando.</p>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Furo de Roteiro</span><span>Feito com café, pipoca e opiniões não solicitadas.</span></div>
    </footer>
  );
}

export function Rating({ value, large = false }: { value: number; large?: boolean }) {
  return (
    <span className={large ? "rating large" : "rating"} aria-label={`Nota ${value} de 5`}>
      <span className="stars" aria-hidden="true">{[1,2,3,4,5].map((n) => <Star key={n} size={large ? 20 : 15} fill={n <= value ? "currentColor" : "none"} />)}</span>
      <strong>{value.toFixed(1).replace(".0","")}</strong>
    </span>
  );
}

export function Verdict({ value }: { value: Post["verdict"] }) {
  return <span className="verdict"><Ticket size={14} /> {value}</span>;
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link to="/critica/$slug" params={{ slug: post.slug }} className={featured ? "post-card featured" : "post-card"}>
      <div className="post-image"><img src={post.image} alt="" loading={featured ? "eager" : "lazy"} /><span className="category-pill">{post.category}</span>{post.holes > 0 && <span className="holes-pill">◉ {post.holes} {post.holes === 1 ? "furo" : "furos"}</span>}</div>
      <div className="post-card-body">
        <div className="meta-row"><span>{post.date}</span><span>{post.readTime} min de leitura</span></div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="card-footer"><Rating value={post.rating} /><Verdict value={post.verdict} /></div>
      </div>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, href }: { eyebrow: string; title: string; href?: string }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {href && <Link to={href as never} className="text-link">Ver tudo <ArrowRight size={17}/></Link>}
    </div>
  );
}
