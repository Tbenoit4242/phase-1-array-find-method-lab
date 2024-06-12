function superbowlWin(record) {
    // Find the object with a win
    const win = record.find(game => game.result === "W");
    // Return the year if a win is found, otherwise return undefined
    return win ? win.year : undefined;
  }