export {};

String.prototype.shortIncludes = function (searchElement: string) {
  return (
    this.toString()
      .toLowerCase()
      .indexOf(searchElement.toString().toLowerCase()) === 0
  );
};
