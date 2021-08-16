const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small className="footer">
      <time>{YEAR}</time> © Samuel Jones.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
