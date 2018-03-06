
//the best conect for if or else checking and so on;
const Correct = x => (
{
  map:f => Correct(f(x)),
  chain:f => f(x),
  fold:(f,g) => g(x)
}
);

const Wrong = x => (
  {
    map:f => f(x),
    chain:f => f(x),
    fold:(f,g) => f(x)
  }
)

export const Nullable = x => x != null ? Correct(x) : Wrong(x);


export const sleep = time => (
  new Promise((resolve, reject) => {
   setTimeout(() => resolve(), time)
 })
)


export const conditionalRender = (condition,ele) => {
  if(condition) return ele;
  else return '';
}
