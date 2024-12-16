import { BrandLogo } from "../atoms/BrandLogo";

export const BrandsRow = () => {
  const brands = [
    {
      name: "CHANEL",
      logoUrl:
        "https://previews.dropbox.com/p/thumb/ACc9OCNlWlFdpMy-8t4sHO52PTZlk-2wGFonWYuXyAFa7mZA4VHlY-cz4doQH4oXgGNWoKIRUByamKbkJYR9yoodBCbOugAy5yETx3QwTeMh6Mu3KI5dr34KpyMWbGWtiC1w8HfRCoKiKlqEDph5vNachMSqvgkhCdc1IEQHJUNaDanzoNGRKshi1bGRVeEXq_RAOf2JfcVEM3dV5cZxy9bXnVsohTSdc-8QDOcWmVYC5-u1iRuE7ZigPttbLsm0BjzzuxJpCDWiAo_j5lKrn3CB3HYU34HVcpIrrVNKFJnbtZtsTgwJX4UaNtpLjmTTvCI/p.png",
    },
    {
      name: "LOUIS VUITTON",
      logoUrl:
        "https://previews.dropbox.com/p/thumb/ACd0ONzjDfKF_cujT1jBKQqi8h_unhdYMXleRcH7P-aNnL1JS72GrrqFKHbEJQ8epOZnDMc8-ghj9mps7ymvkTPN5Po_zXmT0c1rvAVvYFhUWlrBP-VaPzeklZCZs6Dq1Jpxrv5YkIVEuzZlXlfixU-H7OG9T9QO0gKheZugGos8tpLLQACPMrib2S7V1_bB8VYSvtRHteC5V76lwNoStkt-ioM2TXJ3QRt35Ux1YFd6Eod6k-0NS44K_TGy8FSIAin0ak6NTcf5ZwwIRXvPzAPTvyf9934cR2VMpUwLu8Uck1baTOJF__W_b23GUpv2wu0/p.png",
    },
    {
      name: "PRADA",
      logoUrl:
        "https://previews.dropbox.com/p/thumb/ACfog_lPAjnt3P0QvJqEOkRYpVa9pVxx5AkjNkFkQS8AkA2xRckDM6ub3NHh0g8zOiO2H9ypjcyN0SIgRaR39OvTCobfiJTvwXkULx5YTEg42ca51928oGEmxocG8JdKpekXBcipfcnZNYFEBLOhpRwKqlP6UwSADPbEgOjyRqTNlLR6q0XMDttB94RwwOZeufiC-yklTc8nVthZSTRB4BBnNKCE41nSoEh1mX1SALD7eypFKCxCDkBTuai40Q6fZqOh-gXXBT1zCVQkTGMo_eNbYDtrN-pdE5kvS578gBXgM0I4ckPIM2kXfrRWSE3ZYf8/p.png",
    },
    {
      name: "Calvin Klein",
      logoUrl:
        "https://previews.dropbox.com/p/thumb/ACdU5SLi4f3-fWKEaq94ETPF_wtqceRrYvJJ_UKlGFnMq479-jp5xhZt1_Dt2QxaAn2nCpRSBZuLSCsVar38AMmBPjQjwEH5svedC_OM-mkC24gs0SJ8GCzIOKaWNz2sOkiiK0KUQi01oyBhKUCrgYPchzSfLKEwCj8Rj3XApVFvvOPmHpTb7WHZ8TE-D0t0Ha2CaD6yoe8lvUNRd1xsHSUvxEDjZlc-fIf0InKV0wxtglp2AFhi1gnmviHAczJG8m4k41AKnDCZcSnh2_9CDTh38GATaF70zmgKpFT54LtV0RG939zmCuH-fYdag8-iwNE/p.png",
    },
    {
      name: "DENIM",
      logoUrl:
        "https://previews.dropbox.com/p/thumb/ACdqhjQucvXyI5LJ_1db_1t5UWI7AUFzOkVd2ce-PKk8M4rzfZ0gprJpwp4nu_ITmL32ZxoHT1dAsDal8ivxv_X3I90QS3STLh7SwQP5MY6OnC691aCPQMlLLhYUkzkEHXW3W3kY4eVYOQuADW5Z2J4pHVJdInE_sqAioVvE9-KpZKL3nq7MxDBalan80AAFiaDd_IGVJGuzeBSNzCRn7H0zz4IHrCjZxWLwYCGnTOCVGrnD_qkmvtTd7llPL6lIsHz17aAWyEEQQIDoZamIvfgPT6g_m5QxLSMUUj2xFdoeNgqiXGglrCnU-C-NBe6UMb4/p.png",
    },
  ];

  return (
    <div className="w-full py-12 border-t border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {brands.map((brand) => (
          <BrandLogo
            key={brand.name}
            name={brand.name}
            logoUrl={brand.logoUrl}
          />
        ))}
      </div>
    </div>
  );
};
