import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { books } from '../data/books';

const bookCard = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Book() {
  return (
    <section id="book" className="portfolio-section">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">Books</span>
          <h2 className="section-heading mt-4">Writing Desk</h2>
        </div>
        <span className="circle-button">
          <BookOpen size={18} />
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book, index) => (
          <motion.article
            key={book.id}
            custom={index}
            variants={bookCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-70px' }}
            whileHover={{ y: -8 }}
            className="paper-card flex min-h-[510px] flex-col p-4"
          >
            <img src={book.image} alt={book.title} className="h-[245px] w-full border border-[#c9c9c4] object-cover grayscale" />
            <div className="flex flex-1 flex-col pt-5">
              <span className="mono-label">{book.genre}</span>
              <h3 className="mt-3 text-3xl uppercase leading-[0.9] tracking-[-0.055em]">{book.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4a4a45]">
                {book.overview.length > 130 ? `${book.overview.substring(0, 130)}...` : book.overview}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#a9a9a4] px-3 py-1.5 text-[11px] uppercase">{book.publishYear}</span>
                <motion.a href={`/book/${book.id}`} className="circle-button no-underline" aria-label={`Read ${book.title}`} whileHover={{ rotate: 45 }}>
                  <ArrowUpRight size={17} />
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Book;
