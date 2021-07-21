function Title(props: { children: any }): JSX.Element {
  return (
    <div>
      <div className="w-full text-center text-3xl p-2">{props.children}</div>
    </div>
  );
}

export default Title;
