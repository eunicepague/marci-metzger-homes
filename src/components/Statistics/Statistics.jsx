import CountUp from "./CountUp";
import "./Statistics.css";

const stats = [
  {
    icon: "/images/icons/sales.png",
    value: 28.5,
    prefix: "$",
    suffix: "M+",
    label: "Sales Volume",
  },
  {
    icon: "/images/icons/keys.png",
    value: 90,
    suffix: "+",
    label: "Clients helped in 2021",
  },
  {
    icon: "/images/icons/users.png",
    value: 30,
    prefix: "Nearly ",
    suffix: " Years",
    label: "Real Estate Experience",
  },
  {
    icon: "/images/icons/home.png",
    value: "PAHRUMP",
    label: "Proudly Serving",
  },
];

function Statistics() {
  return (
    <section className="statistics-section py-5">
      <div className="container">
        <div className="row g-4 g-lg-0">
          {stats.map((stat) => (
            <div
              className="col-6 col-lg-3 stat-item text-center"
              key={stat.label}
            >
              {/* Custom PNG Icon */}
              <div
                className="stat-icon d-flex align-items-center justify-content-center mb-2"
                aria-hidden="true"
              >
                <img
                  src={stat.icon}
                  alt=""
                  className="stat-image"
                  loading="lazy"
                />
              </div>

              {/* Statistics Value */}
              <h3 className="stat-value fw-semibold mb-1">
                {typeof stat.value === "number" ? (
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                ) : (
                  stat.value
                )}
              </h3>

              {/* Statistics Label */}
              <p className="stat-label text-uppercase fw-semibold mb-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
