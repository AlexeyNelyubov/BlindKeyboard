const DEFAULT_TEXT =
  "Земля - пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.";
 export const getRandomTextFromAjax = async () => {
  try {
    const response = await fetch(
      "https://fish-text.ru/get?&tipe=sentence&number=1"
    );
    const json = await response.json();
    if (response.ok) {
      return json.text;
    } else {
      console.log(json);
      return DEFAULT_TEXT;
    }
  } catch (error) {
    console.error(error.message);
    return DEFAULT_TEXT;
  }
};