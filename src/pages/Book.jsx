import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { books } from '../data/books';

function Book() {
  const { id } = useParams();
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <div className="portfolio-shell">
        <section className="portfolio-section text-center">
          <Link to="/" className="editorial-button mx-auto mb-8 w-fit">
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
          <span className="section-kicker block">Missing Book</span>
          <h1 className="section-heading mt-4">Not Found</h1>
        </section>
      </div>
    );
  }

  return (
    <div className="portfolio-shell">
      <section className="portfolio-section">
        <Link to="/#book" className="editorial-button mb-8 w-fit">
          <ArrowLeft size={15} />
          Back to Books
        </Link>

        <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={book.image} alt={book.title} className="w-full border border-[#c9c9c4] object-cover grayscale" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-kicker">{book.genre}</span>
            <h1 className="section-heading mt-4">{book.title}</h1>
            <div className="mt-7 flex flex-wrap gap-2">
              {[book.type, book.publishYear, book.status].map((detail) => (
                <span key={detail} className="rounded-full border border-[#a9a9a4] px-4 py-2 text-xs uppercase">
                  {detail}
                </span>
              ))}
            </div>
            <p className="mt-8 text-[17px] leading-relaxed text-[#30302d]">{book.overview}</p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            className="paper-card p-6 md:p-8"
          >
            <span className="section-kicker">Key Themes</span>
            <ul className="mt-6 space-y-4">
              {book.coreThemes.map((theme) => (
                <li key={theme} className="border-b border-[#c9c9c4] pb-4 text-sm uppercase text-[#30302d] last:border-b-0">
                  {theme}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ delay: 0.08 }}
            className="paper-card p-6 md:p-8"
          >
            <span className="section-kicker">Narrative Identity</span>
            <p className="mt-6 text-[17px] leading-relaxed text-[#30302d]">{book.narrativeIdentity}</p>
            {book.buyLinks && book.buyLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {book.buyLinks.map((link) => (
                  <motion.a key={link.platform} href={link.url} className="editorial-button" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                    {link.platform}
                    <ExternalLink size={15} />
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Book;
