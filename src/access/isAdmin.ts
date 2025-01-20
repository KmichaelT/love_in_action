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
  return checkAdminRole(user);
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return checkAdminRole(user);
}

type AdminUIArgs = {
  user: User | null;
}

/**
 * Function to hide admin UI elements from non-admin users
 * Returns true to hide the element from non-admins
 * Returns false to show the element to admins
 */
export const isAdminHidden = (args: AdminUIArgs): boolean => {
  return !checkAdminRole(args.user);
}
