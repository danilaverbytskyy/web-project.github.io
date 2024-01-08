<template>
  <div class="our-devs">
    <div class="container">
      <div class="row">
        <div class="col-12 quick-tasks-title">
          <h2 class="text-center">
            Наши профессиональные разработчики <br> выполняют быстро любые задачи
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 competency-unit">
          <div class="our-devs-text">
            <div class="competency-pic">
              <img src="../assets/img/competency-20.svg" alt="Task-1"/>
            </div>
            <h4 class="our-devs-title text-dark" style="font-size: 33px;">от 1ч</h4>
            <div>Настройка события GA<br>в интернет-магазине</div>
          </div>
        </div>
        <div class="col-12 col-md-4 competency-unit">
          <div class="our-devs-text">
            <div class="competency-pic">
              <img src="../assets/img/competency-21.svg" alt="Task-2"/>
            </div>
            <h4 class="our-devs-title text-dark" style="font-size: 33px;">от 20ч</h4>
            <div>Разработка мобильной<br>версии сайта</div>
          </div>
        </div>
        <div class="col-12 col-md-4 competency-unit">
          <div class="our-devs-text">
            <div class="competency-pic">
              <img src="../assets/img/competency-22.svg" alt="Task-3"/>
            </div>
            <h4 class="our-devs-title text-dark" style="font-size: 33px;">от 8ч</h4>
            <div>Интеграция <br> модуля оплаты</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppOurDevs',
}
</script>
<style>
.our-devs {
  padding-top: 50px;
}

.our-devs h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.our-devs .quick-tasks-title {
  margin-bottom: 55px;
}

.our-devs-text {
  font-weight: 500;
  font-size: 16px;
  color: #404c65;
}
</style>