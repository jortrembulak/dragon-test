export interface Dragon {
  id: string;
  name: string;
  type: string;
  histories: Array<any>;
  createdAt: Date;
}

export type Dragons = Array<Dragon>;
