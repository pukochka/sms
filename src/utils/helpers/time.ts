import config from 'src/config';

export function toUnixSeconds(time: number | undefined): number {
  if (time === undefined) return 0;
  return time.toString().length === 13 ? +time.toString().slice(0, 10) : time;
}

export function toTimeEnd(time: number | undefined): number {
  return (
    (toUnixSeconds(Date.now()) - toUnixSeconds(time)) / config.time_to_order_end
  );
}

export function toCurrentTime(time: number): string {
  const end = config.time_to_order_end - time * config.time_to_order_end;

  const end_seconds =
    end % 60 < 10
      ? '0' + (end % 60).toFixed()
      : (end % 60).toFixed().toString();
  const end_minutes =
    end < 60
      ? '00'
      : end < 600
      ? '0' + Math.floor(end / 60)
      : Math.floor(end / 60).toString();

  return end_minutes + ':' + end_seconds;
}
