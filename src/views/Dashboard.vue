<template>

    <section class="section dashboard">
        <div class="row">

            <div class="col-xxl-4 col-md-4">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Total Supply</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>PHP 14,555</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-xxl-4 col-md-4">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Net for Today</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>PHP 14,555</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-xxl-4 col-md-4">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Send for Today</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>PHP 14,555</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>


        <div class="col-lg-6">
          <div class="card">
            <div class="card-body" id="app">
                <h5 class="card-title">Total SUpply Per Day</h5>
                <TotalSupplyPerDayChart/>
            </div>
          </div>
        </div>

          <div class="col-lg-6">
          <div class="card">
            <div class="card-body" id="app">
                <h5 class="card-title">Net Per Day</h5>
                <NetPerDayVue/>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body" id="app">
                <h5 class="card-title">Total Minted Per Day</h5>
                <TotalMintedPerDayChart/>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body" id="app">
                <h5 class="card-title">Total Burned Tokens Per Day</h5>
                <TotalBurnedTokenPerDayChart/>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body" id="app">
                <h5 class="card-title">Token Sent Tokens Per Day</h5>
                <TotalSentTokenPerDay/>
            </div>
          </div>
        </div>

        </div>
    </section>    

</template>

<script>
import TotalSupplyPerDayChart from './TotalSupplyPerDayChart.vue';
import NetPerDayVue from './NetPerDay.vue';
import TotalMintedPerDayChart from './TotalMintedTokenPerDayChart.vue'
import TotalBurnedTokenPerDayChart from './TotalBurnedTokenPerDayChart.vue'
import TotalSentTokenPerDay from './TotalSentTokenPerDayChart.vue'



export default {
  name: 'App',
  components: {
    TotalSupplyPerDayChart,
    NetPerDayVue,
    TotalMintedPerDayChart,
    TotalBurnedTokenPerDayChart,
    TotalSentTokenPerDay
  }
}

</script>
