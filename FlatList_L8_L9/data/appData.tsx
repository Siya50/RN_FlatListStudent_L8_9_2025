/*This file will define the datatType we are using
 * in our app
 * We will also create the array DATA here and export both so we can import wherever we need them
 */
 type dataType = {
    id: string; //unique identifier
    title: string; //text displayed in flatlist

  }

  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];
// When exporting more than 1 item we don't use the word default and instead put them in curly braces
  export { DATA, dataType };
