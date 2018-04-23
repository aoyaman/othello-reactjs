
// 指定した方向をチェック
const checkLine = (i, x, y, nextStone, cells) => {
  let j = i + x + (y * 8);

  // indexからはみ出たら、この方向はダメってこと
  if (j < 0 || j >= cells.length) {
    return null;
  }

  // 進んだ先に石がなかったら、この方向はダメってこと
  if (cells[j].stone === null) {
    return null;
  }
  // 進んだ先の石が次におく石と同じ石の場合は、この方向はダメってこと
  if (cells[j].stone === nextStone) {
    return null;
  }


  // ここまで来たってことは、
  // 指定された報告の１歩目が別の色の石ってこと。
  // さらに進んで、同じ色の石があるかチェックする
  while (j < cells.length) {
    j = j + x + (y * 8);

    // indexからはみ出たら、この方向はダメってこと
    if (j < 0 || j >= cells.length) {
      return null;
    }

    // 進んだ先に石がなかったら、この方向はダメってこと
    if (cells[j].stone === null) {
      return null;
    }
    // 進んだ先の石が次におく石と同じ石の場合は、この方向はOKってこと
    if (cells[j].stone === nextStone) {
      console.log(`nextStone[${nextStone}] can set to ${i}`);
      return nextStone;
    }
  }
  return null;
};

// 次におくことができるセルをチェックする
const checkPossibleCell = (cells, counter) => {
  const results = cells;
  const nextStone = (counter % 2) === 0 ? 'black' : 'white';
  const nineDirections = [
    { x: -1, y: -1 }, // 左上
    { x: 0, y: -1 }, //  真上
    { x: 1, y: -1 }, //  右上
    { x: -1, y: 0 }, //  左
    { x: 1, y: 0 }, //   右
    { x: -1, y: 1 }, // 左下
    { x: 0, y: 1 }, //  真下
    { x: 1, y: 1 }, //  右下
  ];

  // １セルずつみて行く
  for (let i = 0; i < results.length; i += 1) {
    if (results[i].stone == null) {
      // 一方向ずつみて行く
      for (let j = 0; j < nineDirections.length; j += 1) {
        results[i].nextStone =
          checkLine(
            i, nineDirections[j].x, nineDirections[j].y,
            nextStone, results,
          );
        if (results[i].nextStone) {
          break;
        }
      }
    }
  }
  return results;
};

// 指定した方向にひっくり返していく
const hikkuriKaesuLine = (i, x, y, cells) => {
  const results = [];

  // 指定されたx、yだけ進んだ先のindex
  let j = i + x + (y * 8);

  // indexからはみ出たら、この方向はダメってこと
  if (j < 0 || j >= cells.length) {
    return null;
  }

  // 進んだ先に石がなかったら、この方向はダメってこと
  if (cells[j].stone === null) {
    return null;
  }
  // 進んだ先の石が次におく石と同じ石の場合は、この方向はダメってこと
  if (cells[j].stone === cells[i].stone) {
    return null;
  }

  // ひっくり返す位置をリストに追加
  results.push(j);

  while (j >= 0 && j < cells.length) {
    // 指定されたx、yだけ進んだ先のindex
    j = j + x + (y * 8);

    // indexからはみ出たら、この方向はダメってこと
    if (j < 0 || j >= cells.length) {
      return null;
    }

    // 進んだ先に石がなかったら、この方向はダメってこと
    if (cells[j].stone === null) {
      return null;
    }
    // 進んだ先の石が次におく石と同じ石の場合は、ここまでをひっくり返す
    if (cells[j].stone === cells[i].stone) {
      return results;
    }

    // ひっくり返す位置をリストに追加
    results.push(j);
  }
  return null;
};

// 石を置いた時のひっくり返す処理
const hikkuriKaesu = (cells, index) => {
  const results = cells;
  const nineDirections = [
    { x: -1, y: -1 }, // 左上
    { x: 0, y: -1 }, //  真上
    { x: 1, y: -1 }, //  右上
    { x: -1, y: 0 }, //  左
    { x: 1, y: 0 }, //   右
    { x: -1, y: 1 }, // 左下
    { x: 0, y: 1 }, //  真下
    { x: 1, y: 1 }, //  右下
  ];

  // 一方向ずつみて行く
  for (let j = 0; j < nineDirections.length; j += 1) {
    const list = hikkuriKaesuLine(index, nineDirections[j].x, nineDirections[j].y, results);
    if (list) {
      for (let k = 0; k < list.length; k += 1) {
        results[list[k]].stone = cells[index].stone;
      }
    }
  }
  return results;
};

// -----------------------------------
// ゲーム開始
// -----------------------------------
export const startGame = () => (dispatch, getState) => {
  const state = getState();
  console.log('state=', state);
  const counter = 0;
  let cells = [];

  // 配列をセット
  for (let i = 0; i < 8 * 8; i += 1) {
    let stone = null;
    // 中央の左上と右下
    if (i === 27 || i === 36) {
      stone = 'white';

    // 中央の右上と左下
    } else if (i === 28 || i === 35) {
      stone = 'black';
    }

    // 配列に詰めて行く
    cells.push({
      stone,
      key: `cells${i}`,
      nextStone: null,
    });
  }

  // 次における場所のチェック
  cells = checkPossibleCell(cells, counter);

  for (let i = 0; i < cells.length; i += 1) {
    console.log(`startGagme()...cells[${i}]=${cells[i].nextStone}`);
  }
  console.log('startGame()...cells=', cells);

  dispatch({ type: 'START_GAME', cells, counter });
};

// -----------------------------------
// セルをクリック
// -----------------------------------
export const clickCell = index => (dispatch, getState) => {
  const state = getState();
  let cells = [];
  console.log(`clickCell()...index=${index}`);

  if (index < 0 || index >= state.game.cells.length) {
    console.error('clickCell()...index is ERROR! index=', index);
    return;
  }

  if (state.game.cells[index].nextStone === null) {
    console.log('clickCell()...index is not nextStone index');
    return;
  }

  // 配列をセット
  for (let i = 0; i < state.game.cells.length; i += 1) {
    const newCell = Object.assign({}, state.game.cells[i]);

    if (i === index) {
      newCell.stone = (state.game.counter % 2) === 0 ? 'black' : 'white';
      state.game.counter += 1;
    }

    // 次に置ける場所はこの後でチェックするので初期化
    newCell.nextStone = null;

    cells.push(newCell);
  }

  // 石をひっくり返す
  cells = hikkuriKaesu(cells, index);

  // 次における場所のチェック
  cells = checkPossibleCell(cells, state.game.counter);

  dispatch({ type: 'CLICK_CELL', cells, counter: state.game.counter });
};

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
