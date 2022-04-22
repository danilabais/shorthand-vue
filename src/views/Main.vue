<template>
  <main class="container-sm mt-4">
    <h1 class="display-4">Печать в слепую</h1>
    <hr class="my-4" />
    <p class="h5">
      На этом сайте ты сможешь не только научиться скорописи, но и отточить свои
      навыки. <br />
      Для доступа к полному функционалу сайта - рекомендуется авторизоваться.
      <br />
      Внимательно ознакомься с этим разделом, прежде чем, как приступать к
      обучению, помни - результат зависит только от тебя!
    </p>
    <hr class="my-4" />
    <h2 class="h-6 mb-5">Поза при печати</h2>
    <p class="h5">
      Следите за осанкой. Многие офисные кресла имеют функцию регулировки
      спинки, сиденья или даже поясничную опору. Ваше кресло может отличаться от
      других, поэтому помните о следующих советах:
    </p>
    <div class="d-flex textAndImg">
      <ul class="list-group">
        <li class="list-group-item">
          <img src="@/assets/icons/dot.svg" alt="dot" /> Расстояние от глаз до
          экрана должно быть 45-70 см.
        </li>
        <li class="list-group-item">
          <img src="@/assets/icons/dot.svg" alt="dot" />Голова должна быть
          немного наклонена вперед.
        </li>
        <li class="list-group-item">
          <img src="@/assets/icons/dot.svg" alt="dot" />Сиди ровно и держи спину
          прямой.
        </li>
        <li class="list-group-item">
          <img src="@/assets/icons/dot.svg" alt="dot" />Локти держи согнутыми
          под прямым углом.
        </li>
        <li class="list-group-item">
          <img src="@/assets/icons/dot.svg" alt="dot" />Расслабь мышцы плеч, рук
          и кистей. Кисти могут немного касаться стола в нижней части
          клавиатуры, но не переноси вес тела на руки, чтобы не перенапрягать
          кисти.
        </li>
      </ul>
      <img src="@/assets/photo/man.png" class="img" alt="man" />
    </div>
    <hr class="my-4" />
    <h2 class="h-6 mb-5">Исходная позиция</h2>
    <img
      src="@/assets/photo/fingers.png"
      alt="fingers"
      class="mx-auto d-block mb-5"
    />
    <p class="h5">
      Согни и положи пальцы как показано на фото. Обратите внимание, на
      указательных пальцах на клавиатуре есть засечки, это для того, чтобы руки
      быстро находили правильное положение. Строка, на которой расположены
      пальцы называется - <strong>ОСНОВНАЯ</strong>. Твои пальцы всегда должны
      возращаться к основной строке
    </p>
    <hr class="my-4" />
    <h2 class="h-6 mb-5">Клавиатура</h2>
    <img
      src="@/assets/photo/keyboard.png"
      class="keyboard mx-auto d-block mb-5"
      alt="keyboard"
    />
    <p class="h5 mb-5">
      Цвет клавиш на фотографии поможет запомнить вам, какими пальцами на какие
      клавиши нажимать
    </p>
    <ul class="list-group mb-5">
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Когда набираешь текст,
        представляй расположение клавиш.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Пробел отбивай большим
        пальцем левой или правой руки, как тебе удобнее.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Клавишу SHIFT всегда
        нажимает мизинец с противоположной стороны от нужной буквы.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Установи ритм и соблюдай
        его, пока печатаешь. Нажимай на клавиши с одинаковым интервалом.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Всегда возвращай пальцы в
        исходную позицию «ФЫВА –
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Нажимай клавиши только тем
        пальцем, который для них предназначен.
      </li>
    </ul>
    <p class="h5">
      Сначала такой метод печати может показаться неудобным. Но не
      останавливайся. Со временем все будет получаться быстро, легко и удобно.
    </p>
    <hr class="my-4" />
    <h2 class="h-6 mb-5">Скорость печати</h2>
    <ul class="list-group mb-5">
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Всегда просматривай текст
        на одно-два слова вперед.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Не торопись когда
        печатаешь, чтобы избежать ошибок. Скорость будет возрастать постепенно.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Не пытайся сразу печатать
        со скоростью света. Начинай ускоряться, только когда все 10 пальцев
        привыкнут нажимать правильные клавиши.
      </li>
      <li class="list-group-item">
        <img src="@/assets/icons/dot.svg" alt="dot" />Тренеруйся и твоя скорость
        станет выше средней скорости печати.
      </li>
    </ul>
    <h2 class="h-6 mb-5 text-center">Удачи!</h2>
    <div class="d-grid gap-2 col-6 mx-auto mb-5">
      <router-link to="/train" class="btn btn-lg btn-success" type="button"
        >Тренировка
        <img src="@/assets/icons/biceps.svg" class="biceps-fix" alt="biceps"
      /></router-link>
      <router-link to="/exam" class="btn btn-lg btn-success" type="button"
        >Экзамен
        <img src="@/assets/icons/mortarboard-fill.svg" alt="mortarboard-fill"
      /></router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.textAndImg {
  display: flex;
}
.keyboard {
  max-height: 300px;
}
.textAndImg ul {
  margin-top: 20px;
}
.textAndImg .img {
  margin-left: 50px;
  max-width: 340px;
}
@media (max-width: 1000px) {
  .textAndImg {
    flex-direction: column-reverse;
  }
  .textAndImg img {
    margin-left: 0;
  }
  .textAndImg img {
    margin-bottom: 20px;
  }
}
.biceps-fix {
  width: 16px;
}
</style>
