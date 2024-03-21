import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="billboard-container">
            <div className="billboard-logo">
                <img src="https://occ-0-7290-2706.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABS1kQ3bLw61sI8nNQHftRAKuEw-TfNIAjZ2UnZKfwlSWMuc7JVGnvJiFqvkem_5adGMUswsUoJjL0zyIkyIK2QS7Cah82EJv7CKrzZDkapM.webp?r=c0d" />
            </div>
            <div className="summary">
                Kanserden öleceğini öğrenen bir kimya öğretmeni, ailesinin geleceğini garanti altına almak için metanfetamin üretip satmak üzere eski bir öğrencisiyle kafa kafaya verir.
            </div>
            <div className="button-container">
                <button className='play-button'>▶ Oynat</button>
                <button style={{width:"190px"}}> ? Daha Fazla Bilgi</button>
            </div>
            <span className="maturity-rating">+18</span>
        </div>
    )
}

export default Banner;