// render 像是幫我模擬元件渲染
import { render, screen, fireEvent, logRoles } from '@testing-library/react';
// 引入要測試的元件
import JestCounterPage from './JestCounterPage';

// describe 是甚麼碗糕 裡面的 getByRole 取不到東西
// describe('JestCounterPage', () => {
//   render(<JestCounterPage />);
//   // it 個別測試
//   it('計數器正確顯示預設值', () => {
//     // 有點像是原生抓 DOM 資訊的方式
//     const countValue = Number(screen.getByTestId('count').textContent);
//     expect(countValue).toEqual(0);
//   });

//   it('點擊 increment 按鈕後數字 + 1', () => {
//     const incrementBtns = screen.getByRole('button', { name: 'increment' });
//     // fireEvent.click(incrementBtn);
//     // const countValue = Number(screen.getByTestId('count').textContent);
//     expect(incrementBtns).toBeInTheDocument();
//   });
// });

// 使用 logRoles 來檢視某個 HTML Element 所包含的 Accessibility Role
// test('test1', async () => {
//   const { container } = render(<JestCounterPage />);
//   logRoles(container);
// });

test('計數器正確顯示預設值', () => {
  render(<JestCounterPage />);
  const countValue = Number(screen.getByTestId('count').textContent);
  expect(countValue).toEqual(0);
});

test('點擊 increment 按鈕後數字 + 1', () => {
  render(<JestCounterPage />);
  const incrementBtn = screen.getByRole('button', { name: 'increment' });
  fireEvent.click(incrementBtn);
  const countValue = Number(screen.getByTestId('count').textContent);
  expect(countValue).toEqual(1);
});

test('點擊 decrement 按鈕後數字 + 1', () => {
  render(<JestCounterPage />);
  const decrementBtn = screen.getByRole('button', { name: 'decrement' });
  fireEvent.click(decrementBtn);
  const countValue = Number(screen.getByTestId('count').textContent);
  expect(countValue).toEqual(-1);
});
