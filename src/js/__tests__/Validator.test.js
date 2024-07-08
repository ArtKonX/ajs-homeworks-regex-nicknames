import Validator from "../Validator";

test('Тестирование метода validateUsername', () => {
    const validUsername = new Validator('ArtKonX').validateUsername();
    expect(validUsername).toEqual(true);
})