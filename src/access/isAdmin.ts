import { Access, FieldAccess, User } from "payload";

// Helper function to check if user has admin role
const checkAdminRole = (user: User | null): boolean => {
  if (!user?.roles || !Array.isArray(user.roles)) return false;
  
  return user.roles.some(role => {
    if (typeof role === 'object' && role !== null) {
      return role.slug === 'admin';
    }
    return false;
  });
}

export const isAdmin: Access = ({ req: { user } }) => {
  return checkAdminRole(user as User | null);
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return checkAdminRole(user as User | null);
}

// For Payload admin UI and frontend components
export const isAdminHidden = ({ user }: { user: User }): boolean => {
  return !checkAdminRole(user);
}
